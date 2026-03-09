import { Link } from "react-router-dom";

function HomeNavBar() {
  return (
    <nav className="w-full px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/nutribox/logo-horizontal.svg"
            alt="Logo NutriBox"
            className="h-7 md:h-8"
          />
        </Link>
      </div>

 
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <Link
          to="/"
          className="text-gray-600 text-lg lg:text-xl font-medium hover:text-[#64a30d] transition-all"
        >
          Início
        </Link>

        <Link
          to="#nutribox"
          className="text-gray-600 text-lg lg:text-xl font-medium hover:text-[#64a30d] transition-all"
        >
          A nutribox
        </Link>

        <Link
          to="/"
          className="text-gray-600 text-lg lg:text-xl font-medium hover:text-[#64a30d] transition-all"
        >
          Produtos
        </Link>

        <Link
          to="/axiom"
          className="text-gray-600 text-lg lg:text-xl font-medium hover:text-[#64a30d] transition-all"
        >
          Axiom
        </Link>
      </div>


      <div>
        <Link to="/login/entrar">
          <button className="bg-[#f97316] hover:bg-[#e66712] text-white px-6 md:px-10 py-2 rounded-full font-bold text-sm md:text-base transition-all shadow-md cursor-pointer">
            Entrar
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default HomeNavBar;
