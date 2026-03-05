import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#8B3D00] text-white py-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              
              <img src="/nutribox/logo-white.svg" alt="Nutribox Logo" className="h-8 w-auto" />
              
            </div>
            <p className="text-sm opacity-90 leading-relaxed max-w-[200px]">
              Restaurantes saudáveis conectados em um único hub.
            </p>
          </div>

          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Páginas</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-[#64a30d] transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-[#64a30d] transition-colors">A Nutribox</a></li>
              <li><a href="#" className="hover:text-[#64a30d] transition-colors">Produtos</a></li>
              <li><a href="#" className="hover:text-[#64a30d] transition-colors">Axiom</a></li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[#64a30d] font-bold">Endereço</p>
                <p className="opacity-90">Av. Veggie Burger, 4127</p>
              </div>
              <div>
                <p className="text-[#64a30d] font-bold">Email</p>
                <p className="opacity-90">axiom@nutribox.com</p>
              </div>
            </div>
          </div>

         
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Um projeto feito pela equipe:</h3>
            <div className="bg-[#f97316] p-4 rounded-lg inline-block shadow-md">
              <img src="/axiom/axiom-footer.png" alt="Axiom Logo" className="h-20" />
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
          <p>Axiom & Generation Brasil - 2026</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;