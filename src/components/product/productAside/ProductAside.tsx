import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/authcontext/AuthContext";
import type Category from "../../../models/Category";
import { findItems } from "../../../services/Service";

type AsideProps = {
  precoBusca: string;
  setPrecoBusca: React.Dispatch<React.SetStateAction<string>>;
  categoriasSelecionadas: number[];
  setCategoriasSelecionadas: React.Dispatch<React.SetStateAction<number[]>>;
};

function ProductAside({
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
    <aside className="w-full lg:w-67.5 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-slate-300 pb-6 lg:pb-0 lg:pr-6">
      <div className="bg-white rounded-xl border border-slate-200 p-3 flex gap-3 items-center shadow-sm">
        <img
          src={user.foto}
          alt="Estabelecimento"
          className="w-16 h-16 object-cover rounded-lg"
        />

        <div className="text-sm">
          <p className="font-semibold text-slate-700">{user.nome}</p>
          <p className="text-xs text-slate-400">{user.usuario}</p>
        </div>
      </div>

      <Link to="/produtos/cadastrar">
        <button className="w-full bg-lime-500 hover:bg-lime-600 transition text-white font-medium py-2.5 rounded-lg hover:cursor-pointer">
          Adicionar Produto
        </button>
      </Link>

      <button
        onClick={limparFiltros}
        className="w-full border border-slate-300 hover:bg-slate-100 transition text-slate-700 font-medium py-2 rounded-lg hover:cursor-pointer"
      >
        Limpar filtros
      </button>

      <div>
        <h4 className="font-semibold text-slate-700 mb-2">
          Pesquise por preço
        </h4>

        <input
          type="number"
          placeholder="Digite o preço"
          value={precoBusca}
          onChange={(e) => setPrecoBusca(e.target.value)}
          className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <h4 className="font-semibold text-slate-700 mb-2">
          Filtrar por categoria
        </h4>

        <div className="flex flex-wrap gap-2">
          {categorias.map((categoria) => (
            <label
              key={categoria.id}
              className={`flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full border text-sm transition
  ${
    categoriasSelecionadas.includes(categoria.id)
      ? "bg-lime-600 text-white border-lime-600"
      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
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

export default ProductAside;
