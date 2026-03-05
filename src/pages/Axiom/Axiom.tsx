import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cards } from "../../constants/Axiom";

interface SobreNosCard {
  name: string;
  role: string;
  photo: string;
  description: string;
}

export default function Axiom() {
  const [active, setActive] = useState<SobreNosCard | null>(null);

  const frontendTechs = [
    { name: "TypeScript", file: "typescript.svg" },
    { name: "React", file: "react.png" },
    { name: "Tailwind", file: "tailwind.svg" },
    { name: "Vite", file: "vite.png" },
    { name: "Vercel", file: "vercel.svg" },
  ];

  const backendTechs = [
    { name: "PostgreSQL", file: "postgresql.svg" },
    { name: "NodeJS", file: "nodejs.png" },
    { name: "NestJS", file: "nestjs.svg" },
    { name: "TypeORM", file: "typeorm.png" },
    { name: "Render", file: "render.svg" },
    { name: "Neon", file: "neon.png" },
  ];

  return (
    <section className="bg-white text-slate-800">
      <div className="bg-[#F7F7F7] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-8">
            <img
              src="/axiom/axiom-footer.png"
              alt="Axiom"
              className="h-20 object-contain"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Engenharia por trás do{" "}
            <span className="text-green-600">Nutribox</span>
          </motion.h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A Axiom é a software house responsável pelo desenvolvimento do
            Nutribox, criando uma plataforma moderna que conecta restaurantes,
            logística e consumidores em um único ecossistema digital.
          </p>
        </div>
      </div>

     
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Tecnologia aplicada à alimentação saudável
            </h2>

            <p className="text-slate-600 leading-relaxed">
              O Nutribox é um web app de food delivery focado em alimentação
              saudável, funcionando como um hub de dark kitchens que conecta
              restaurantes parceiros, vendedores e consumidores finais.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Inspirado nos bentôs japoneses, o Nutribox organiza refeições
              completas e balanceadas em uma experiência simples de pedir,
              receber e consumir alimentos saudáveis no dia a dia.
            </p>

            <p className="text-slate-600 leading-relaxed">
              A plataforma centraliza produção, estoque e logística, garantindo
              eficiência operacional e disponibilidade constante de refeições
              nutritivas.
            </p>
          </div>

          <motion.img
            src="/nutribox/logo-horizontal.svg"
            alt="Nutribox tecnologia"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

 
      <div className="bg-[#F7F7F7] py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Tecnologias utilizadas</h2>
            <p className="text-slate-500 mt-4">
              Arquitetura moderna para aplicações web escaláveis
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-6">
              Front-end
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {frontendTechs.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -5 }}
                  className="bg-white border rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={`/tech/${tech.file}`}
                    alt={tech.name}
                    className="h-10 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>


          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-6">
              Back-end & Infraestrutura
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {backendTechs.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -5 }}
                  className="bg-white border rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={`/tech/${tech.file}`}
                    alt={tech.name}
                    className="h-10 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold">Equipe Axiom</h2>
            <p className="text-slate-500 mt-4">
              Time responsável pelo desenvolvimento do Nutribox
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {cards.map((card) => (
              <motion.div
                key={card.name}
                layoutId={`card-${card.name}`}
                onClick={() => setActive(card)}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition bg-white">
                  <motion.img
                    layoutId={`image-${card.name}`}
                    src={card.photo}
                    alt={card.name}
                    className="w-full h-[360px] object-cover object-top"
                  />

                  <div className="p-6">
                    <h3 className="font-semibold">{card.name}</h3>
                    <p className="text-green-600 text-sm">{card.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            <motion.div
              layoutId={`card-${active.name}`}
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
            >
              <motion.div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2">
                  <motion.img
                    layoutId={`image-${active.name}`}
                    src={active.photo}
                    alt={active.name}
                    className="w-full h-[500px] object-cover object-top"
                  />

                  <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold">{active.name}</h3>

                    <p className="text-green-600 mt-2">{active.role}</p>

                    <p className="text-slate-600 mt-6 leading-relaxed">
                      {active.description}
                    </p>

                    <button
                      onClick={() => setActive(null)}
                      className="mt-8 text-sm text-slate-500 hover:text-black"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
