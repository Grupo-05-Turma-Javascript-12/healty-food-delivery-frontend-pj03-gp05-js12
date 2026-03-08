import { Link } from "react-router-dom";


function HomeNavBar() {
  return (
    <nav className="flex mx-35 my-10 items-center justify-between md:flex-row sm:flex-col flex-wrap sm:gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/nutribox/logo-horizontal.svg"
              alt="Logo NutriBox"
              className="h-7"
            />
          </Link>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link
          to="/"
          className="text-gray-600 text-xl font-medium hover:text-[#64a30d] transition-all"
        >
          Início
        </Link>
        <Link
          to="#nutribox"
          className="text-gray-600 text-xl font-medium hover:text-[#64a30d] transition-all"
        >
          A nutribox
        </Link>
        <Link
          to="/"
          className="text-gray-600 text-xl font-medium hover:text-[#64a30d] transition-all"
        >
          Produtos
        </Link>
        <Link
          to="/axiom"
          className="text-gray-600 text-xl font-medium hover:text-[#64a30d] transition-all"
        >
          Axiom
        </Link>
      </div>

      <div>
        <Link to="/login/entrar">
          <button className="bg-[#f97316] hover:bg-[#e66712] text-white px-12 py-2 rounded-full font-bold text-1xl transition-all shadow-md cursor-pointer">
            Entrar
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default HomeNavBar