import React from 'react';

function Solution() {
  return (
    <div className="w-full">
      
      <section className="bg-white py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Alimentação saudável, <br />
              <span className="text-[#64a30d]">sem complicação.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                Descubra pratos low carb, fitness, veganos e muito mais, 
                preparados por parceiros selecionados e disponíveis todos os dias.
              </p>
              <p className="text-[#64a30d] font-semibold italic">
                Diversidade de sabores, um só lugar.
              </p>
            </div>

            <div className="flex gap-4 h-[400px] md:h-[500px]">
              <img 
                src="/photos/05.png" 
                alt="Prato Saudável 1" 
                className="w-1/2 h-full object-cover rounded-sm"
              />
              <img 
                src="/photos/04.png" 
                alt="Prato Saudável 2" 
                className="w-1/2 h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-[#64a30d] py-20 px-6 md:px-24 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 leading-relaxed opacity-95">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A <span className="text-[#f97316]">Nutribox</span>
            </h2>
            <p>O Nutribox é uma plataforma que conecta pessoas que querem se alimentar melhor com restaurantes especializados em comida saudável.</p>
            <p>Inspirado no conceito japonês de bentô — refeições completas e equilibradas o Nutribox organiza pratos nutritivos em um único lugar, com variedade, qualidade e praticidade.</p>
            <p>Nossa plataforma funciona como um hub que integra restaurantes parceiros, logística e tecnologia para garantir que refeições saudáveis estejam sempre disponíveis.</p>
            <p>Assim, você pode escolher entre diversas opções como low carb, fitness, vegano ou funcional, com a segurança de que cada prato foi pensado para o equilíbrio nutricional.</p>
            <p className="font-semibold italic pt-2">O resultado é uma experiência simples: escolher, pedir e comer bem.</p>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <img 
              src="/photos/09.png" 
              alt="Entregador Nutribox" 
              className="rounded-lg shadow-2xl w-full max-w-[500px] h-auto object-cover border-4 border-[#64a30d]" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solution;