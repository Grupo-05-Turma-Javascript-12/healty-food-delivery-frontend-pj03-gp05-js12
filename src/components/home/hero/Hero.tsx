import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="w-full font-sans">
      
     
      <section className="w-full h-screen md:h-[600px] flex flex-col md:flex-row">
        
       
        <div className="w-full md:w-1/2 bg-[#64a30d] flex flex-col justify-center px-8 md:px-24 py-16 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Comer <span className="text-[#f97316]">saudável</span> nunca
            foi tão simples
          </h1>

          <p className="mb-8 text-lg md:text-xl opacity-90 max-w-md leading-relaxed">
            O Nutribox conecta você a refeições equilibradas,
            prontas e feitas por restaurantes especializados
            em alimentação saudável.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to='/login/cadastrar'>
              <button className="bg-[#f97316] hover:bg-[#e66712] px-8 py-3 rounded-md font-bold text-white transition-all shadow-lg text-sm uppercase">
                Cadastrar-se
              </button>
            </Link>

            <Link to='/login/entrar'>
              <button className="bg-white text-[#64a30d] border-2 border-white px-8 py-3 rounded-md font-bold transition-all hover:bg-transparent hover:text-white text-sm uppercase">
                Entrar
              </button>
            </Link>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 h-[350px] md:h-auto">
          <img
            src="/photos/09.png" 
            alt="Entrega Nutribox"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;