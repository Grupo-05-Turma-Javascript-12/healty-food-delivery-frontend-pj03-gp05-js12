import React from 'react';
import { Link } from 'react-router-dom';

function HomeNavbar() {
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-24 flex items-center justify-between shadow-sm sticky top-0 z-50">
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
          to="/"
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
        <Link to='/login/entrar'>
          <button className="bg-[#f97316] hover:bg-[#e66712] text-white px-12 py-2 rounded-full font-bold text-1xl transition-all shadow-md">
            Entrar
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default HomeNavbar;