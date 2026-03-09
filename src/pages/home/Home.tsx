import { Link } from "react-router-dom";
import HomeNavBar from "../../components/homeNavBar/HomeNavBar";
import { motion, type Variants } from "framer-motion";

function Home() {
  const features = [
    {
      id: "01.",
      title: "Comida de verdade, feita para o seu dia a dia",
      img: "/photos/01.png",
    },
    {
      id: "02.",
      title: "Diversidade de sabores, um só lugar",
      img: "/photos/02.png",
    },
    {
      id: "03.",
      title: "Pronto para comer, pronto para cuidar de você",
      img: "/photos/03.png",
    },
    {
      id: "04.",
      title: "Menos tempo na cozinha. Mais tempo para viver.",
      img: "/photos/04.png",
    },
  ];

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <HomeNavBar />

      <div className="w-full font-sans overflow-hidden">
        <section className="w-full min-h-screen lg:min-h-[650px] flex flex-col lg:flex-row">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2 bg-[#64a30d] flex flex-col justify-center px-8 lg:px-24 py-20 text-white"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Comer <span className="text-[#f97316]">saudável</span> nunca foi
              tão simples
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mb-8 text-lg md:text-xl opacity-90 max-w-md leading-relaxed"
            >
              O Nutribox conecta você a refeições equilibradas, prontas e feitas
              por restaurantes especializados em alimentação saudável.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link to="/login/cadastrar">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="cursor-pointer bg-[#f97316] px-8 py-3 rounded-md font-bold text-white shadow-lg text-sm uppercase"
                >
                  Cadastrar-se
                </motion.button>
              </Link>

              <Link to="/login/entrar">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="cursor-pointer bg-white text-[#64a30d] border-2 border-white px-8 py-3 rounded-md font-bold hover:bg-transparent hover:text-white text-sm uppercase"
                >
                  Entrar
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2 h-[380px] md:h-[480px] lg:h-auto"
          >
            <img
              src="/photos/09.png"
              alt="Entrega Nutribox"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        <section className="bg-white py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center lg:text-left mb-16"
            >
              <h2 className="text-center text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
                Alimentação saudável, <br />
                <span className="text-[#64a30d]">sem complicação.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeUp} className="space-y-6">
                <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                  Descubra pratos low carb, fitness, veganos e muito mais,
                  preparados por parceiros selecionados e disponíveis todos os
                  dias.
                </p>

                <p className="text-[#64a30d] font-semibold italic">
                  Diversidade de sabores, um só lugar.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4">
                <img
                  src="/photos/05.png"
                  alt="Prato saudável"
                  className="w-1/2 aspect-[4/5] object-cover rounded-sm"
                />

                <img
                  src="/photos/04.png"
                  alt="Prato saudável"
                  className="w-1/2 aspect-[4/5] object-cover rounded-sm"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section
          className="bg-[#64a30d] py-20 px-6 lg:px-24 text-white"
          id="nutribox"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="space-y-4 leading-relaxed">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                A <span className="text-[#f97316]">Nutribox</span>
              </h2>

              <p>
                O Nutribox é uma plataforma que conecta pessoas que querem se
                alimentar melhor com restaurantes especializados em comida
                saudável.
              </p>

              <p>
                Inspirado no conceito japonês de bentô — refeições completas e
                equilibradas — o Nutribox organiza pratos nutritivos em um único
                lugar.
              </p>

              <p>
                Nossa plataforma funciona como um hub que integra restaurantes
                parceiros, logística e tecnologia.
              </p>

              <p>
                Assim, você pode escolher entre diversas opções como low carb,
                fitness, vegano ou funcional.
              </p>

              <p className="font-semibold italic pt-2">
                O resultado é uma experiência simples: escolher, pedir e comer
                bem.
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="flex justify-center lg:justify-end"
            >
              <img
                src="/photos/09.png"
                alt="Entrega Nutribox"
                className="rounded-lg shadow-2xl w-full max-w-[500px] object-cover"
              />
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-white py-24 px-6 lg:px-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14"
          >
            {features.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col space-y-6"
              >
                <div className="w-24 h-24 overflow-hidden rounded-md shadow-sm">
                  <img
                    src={item.img}
                    alt={`Diferencial ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-3xl font-extrabold text-gray-900">
                  {item.id}
                </span>

                <p className="text-gray-700 text-lg leading-tight font-medium">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="bg-gray-50 py-24 px-6 lg:px-24 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Comece a <span className="text-[#64a30d]">transformar</span> sua
              alimentação hoje
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Seja para encontrar refeições equilibradas no dia a dia ou para
              levar sua cozinha saudável a mais pessoas.
            </p>

            <Link to="/login/cadastrar">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#f97316] px-12 py-4 rounded-full font-bold text-white shadow-lg text-lg uppercase cursor-pointer"
              >
                Cadastrar-se
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </div>

      <footer className="bg-[#8B3D00] text-white py-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
            <div className="space-y-4">
              <img
                src="/nutribox/logo-white.svg"
                alt="Nutribox Logo"
                className="h-8"
              />
              <p className="text-sm opacity-90 leading-relaxed max-w-[200px]">
                Restaurantes saudáveis conectados em um único hub.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Páginas</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <a href="#" className="hover:text-[#64a30d]">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#64a30d]">
                    A Nutribox
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#64a30d]">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#64a30d]">
                    Axiom
                  </a>
                </li>
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
              <h3 className="font-bold text-lg">
                Um projeto feito pela equipe:
              </h3>
              <div className="bg-[#f97316] p-4 rounded-lg inline-block shadow-md">
                <Link to="/axiom">
                  <img
                    src="/axiom/axiom-footer.png"
                    alt="Axiom Logo"
                    className="h-20"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>Axiom & Generation Brasil - 2026</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
