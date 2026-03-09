import { ArrowLeft, UploadSimple } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext/AuthContext";
import type Category from "../../../models/Category";
import type Product from "../../../models/Product";
import { findItems, registerItem, updateItem } from "../../../services/Service";

function ProductForm() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [categorias, setCategorias] = useState<Category[]>([]);
  const [loadingCategorias, setLoadingCategorias] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [precoInput, setPrecoInput] = useState("");

  const [produto, setProduto] = useState<Product>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    em_estoque: true,
    categoria: null,
    usuario: null,
  });

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  function formatarMoeda(valor: string) {
    const numeros = valor.replace(/\D/g, "");

    const numero = Number(numeros) / 100;

    return numero.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function atualizarPreco(e: React.ChangeEvent<HTMLInputElement>) {
    const valorDigitado = e.target.value;

    const numeros = valorDigitado.replace(/\D/g, "");

    const numero = Number(numeros) / 100;

    setPrecoInput(formatarMoeda(valorDigitado));

    setProduto({
      ...produto,
      preco: numero,
    });
  }

  async function buscarCategorias() {
    try {
      setLoadingCategorias(true);

      await findItems("/categorias", setCategorias, {
        headers: { Authorization: user.token },
      });

      setLoadingCategorias(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function buscarProdutoPorId(id: string) {
    try {
      await findItems(
        `/produtos/${id}`,
        (data: Product) => {
          setProduto(data);

          if (data.preco) {
            setPrecoInput(
              data.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            );
          }
        },
        {
          headers: { Authorization: user.token },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  function atualizarEstado(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    if (name === "preco") {
      const valor = Number(value);
      setProduto({ ...produto, preco: valor });
      return;
    }

    setProduto({
      ...produto,
      [name]: value,
      usuario: user
    });
  }

  function selecionarCategoria(e: React.ChangeEvent<HTMLSelectElement>) {
    const categoriaSelecionada = categorias.find(
      (cat) => cat.id === Number(e.target.value)
    );

    setProduto({
      ...produto,
      categoria: categoriaSelecionada || null,
    });
  }

  async function salvarProduto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!produto.nome || !produto.preco || !produto.categoria) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      setLoadingSubmit(true);

      if (id !== undefined) {
        await updateItem(`/produtos`, produto, setProduto, {
          headers: { Authorization: user.token },
        });
      } else {
        await registerItem(`/produtos`, produto, setProduto, {
          headers: { Authorization: user.token },
        });
      }

      navigate("/produtos");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSubmit(false);
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] p-6 flex justify-center animate-fadeIn">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            {id ? "Editar Produto" : "Adicionar Produto"}
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 border border-green-500 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition cursor-pointer"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
        </div>

        <form
          onSubmit={salvarProduto}
          className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 grid grid-cols-1 gap-6"
        >

          <div className="md:col-span-2 grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Nome do Produto
              </label>

              <input
                type="text"
                name="nome"
                value={produto.nome}
                onChange={atualizarEstado}
                placeholder="Ex: Bowl Fitness de Frango"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Preço
              </label>

              <input
                type="text"
                value={precoInput}
                onChange={atualizarPreco}
                placeholder="R$ 0,00"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Categoria
              </label>

              {loadingCategorias ? (
                <div className="h-10 bg-gray-200 animate-pulse rounded-lg"></div>
              ) : (
                <select
                  onChange={selecionarCategoria}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option value="">Selecione uma categoria</option>

                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nome}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">
                Descrição
              </label>

              <textarea
                name="descricao"
                value={produto.descricao}
                onChange={atualizarEstado}
                placeholder="Descreva o produto..."
                rows={4}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition hover:cursor-pointer"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={loadingSubmit}
                className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-sm transition disabled:opacity-50 hover:cursor-pointer"
              >
                {loadingSubmit
                  ? "Salvando..."
                  : id
                  ? "Atualizar Produto"
                  : "Adicionar Produto"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
