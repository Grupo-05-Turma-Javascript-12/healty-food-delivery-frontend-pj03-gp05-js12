import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-24 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Comece a <span className="text-[#64a30d]">transformar</span> sua alimentação hoje
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Seja para encontrar refeições equilibradas no dia a dia ou para levar sua cozinha saudável a mais pessoas, o Nutribox conecta você a uma nova forma de consumir alimentação saudável.
        </p>
        
        <div className="pt-6">
          <button className="bg-[#f97316] hover:bg-[#e66712] px-12 py-4 rounded-full font-bold text-white transition-all shadow-lg text-lg uppercase tracking-wide">
            Cadastrar-se
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;