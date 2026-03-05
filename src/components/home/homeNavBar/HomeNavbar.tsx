import React from 'react';

function HomeNavbar() {
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-24 flex items-center justify-between shadow-sm sticky top-0 z-50">
      
      <div className="flex items-center gap-2">
       
        <div className="flex items-center">
          <img src="/nutribox/logo-horizontal.svg" alt="Logo NutriBox" className="h-7"/>
        </div>
      </div>

      
      <div className="hidden md:flex items-center gap-8">
        <a href="#inicio" className="text-[#64a30d] text-xl font-semibold hover:opacity-80 transition-all">
          Início
        </a>
        <a href="#sobre" className="text-gray-600 text-xl font-medium hover:text-[#64a30d] transition-all">
          A nutribox
        </a>
        <a href="#produtos" className="text-gray-600 text-xl font-medium hover:text-[#64a30d] transition-all">
          Produtos
        </a>
        <a href="#axiom" className="text-gray-600 text-xl font-medium hover:text-[#64a30d] transition-all">
          Axiom
        </a>
      </div>

     
      <div>
        <button className="bg-[#f97316] hover:bg-[#e66712] text-white px-12 py-2 rounded-full font-bold text-1xl transition-all shadow-md">
          Axiom
        </button>
      </div>

    </nav>
  );
}

export default HomeNavbar;