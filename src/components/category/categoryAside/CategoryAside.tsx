import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authcontext/AuthContext';

function CategoryAside() {

  const { user } = useContext(AuthContext)

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

      <Link to="/categorias/cadastrar">
        <button className="w-full bg-lime-500 hover:bg-lime-600 transition text-white font-medium py-2.5 rounded-lg hover:cursor-pointer">
          Adicionar Produto
        </button>
      </Link>
    </aside>
  );
}

export default CategoryAside