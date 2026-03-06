import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/authcontext/AuthContext";
import type Category from "../../../models/Category";
import { findItems } from "../../../services/Service";

type AsideProps = {
  precoBusca: string;
  setPrecoBusca: React.Dispatch<React.SetStateAction<string>>;
  categoriasSelecionadas: number[];
  setCategoriasSelecionadas: React.Dispatch<React.SetStateAction<number[]>>;
};

function AsideProdutos({
  precoBusca,
  setPrecoBusca,
  categoriasSelecionadas,
  setCategoriasSelecionadas,
}: AsideProps) {
  function limparFiltros() {
    setPrecoBusca("");
    setCategoriasSelecionadas([]);
  }

  const [categorias, setCategorias] = useState<Category[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function buscarCategorias() {
      try {
        await findItems("/categorias", setCategorias, {
          headers: {
            Authorization: user.token,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    buscarCategorias();
  }, [user.token]);

  function toggleCategoria(id: number) {
    if (categoriasSelecionadas.includes(id)) {
      setCategoriasSelecionadas(categoriasSelecionadas.filter((c) => c !== id));
    } else {
      setCategoriasSelecionadas([...categoriasSelecionadas, id]);
    }
  }

  return (
    <aside className="w-full lg:w-67.5 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pb-0 lg:pr-6">
      <div className="bg-white rounded-xl border border-gray-200 p-3 flex gap-3 items-center shadow-sm">
        <img
          src="/photos/01.png"
          alt="Estabelecimento"
          className="w-16 h-16 object-cover rounded-lg"
        />

        <div className="text-sm">
          <p className="font-semibold text-gray-700">NutriBox</p>
          <p className="text-xs text-gray-400">axiom@nutribox.com</p>
        </div>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 transition text-white font-medium py-2.5 rounded-lg">
        Adicionar Produto
      </button>

      <button
        onClick={limparFiltros}
        className="w-full border border-gray-300 hover:bg-gray-100 transition text-gray-700 font-medium py-2 rounded-lg hover:cursor-pointer"
      >
        Limpar filtros
      </button>

      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Pesquise por preço</h4>

        <input
          type="number"
          placeholder="Digite o preço"
          value={precoBusca}
          onChange={(e) => setPrecoBusca(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-2">
          Filtrar por categoria
        </h4>

        <div className="flex flex-wrap gap-2">
          {categorias.map((categoria) => (
            <label
              key={categoria.id}
              className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full border text-sm transition
  ${
    categoriasSelecionadas.includes(categoria.id)
      ? "bg-green-600 text-white border-green-600"
      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
  }`}
            >
              <input
                type="checkbox"
                checked={categoriasSelecionadas.includes(categoria.id)}
                onChange={() => toggleCategoria(categoria.id)}
                className="hidden"
              />

              {categoria.nome}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default AsideProdutos;
