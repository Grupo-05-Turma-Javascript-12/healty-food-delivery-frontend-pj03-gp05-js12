import { Link } from "react-router-dom";
import HomeNavBar from "../../components/homeNavBar/HomeNavBar";

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

  return (
    <>
      <HomeNavBar />
      <div className="w-full font-sans">
        <section className="w-full h-screen md:h-[600px] flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-[#64a30d] flex flex-col justify-center px-8 md:px-24 py-16 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Comer <span className="text-[#f97316]">saudável</span> nunca foi
              tão simples
            </h1>

            <p className="mb-8 text-lg md:text-xl opacity-90 max-w-md leading-relaxed">
              O Nutribox conecta você a refeições equilibradas, prontas e feitas
              por restaurantes especializados em alimentação saudável.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/login/cadastrar">
                <button className="cursor-pointer bg-[#f97316] hover:bg-[#e66712] px-8 py-3 rounded-md font-bold text-white transition-all shadow-lg text-sm uppercase">
                  Cadastrar-se
                </button>
              </Link>

              <Link to="/login/entrar">
                <button className="cursor-pointer bg-white text-[#64a30d] border-2 border-white px-8 py-3 rounded-md font-bold transition-all hover:bg-transparent hover:text-white text-sm uppercase">
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
                  preparados por parceiros selecionados e disponíveis todos os
                  dias.
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

        <section
          className="bg-[#64a30d] py-20 px-6 md:px-24 text-white"
          id="nutribox"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 leading-relaxed opacity-95">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                A <span className="text-[#f97316]">Nutribox</span>
              </h2>
              <p>
                O Nutribox é uma plataforma que conecta pessoas que querem se
                alimentar melhor com restaurantes especializados em comida
                saudável.
              </p>
              <p>
                Inspirado no conceito japonês de bentô — refeições completas e
                equilibradas o Nutribox organiza pratos nutritivos em um único
                lugar, com variedade, qualidade e praticidade.
              </p>
              <p>
                Nossa plataforma funciona como um hub que integra restaurantes
                parceiros, logística e tecnologia para garantir que refeições
                saudáveis estejam sempre disponíveis.
              </p>
              <p>
                Assim, você pode escolher entre diversas opções como low carb,
                fitness, vegano ou funcional, com a segurança de que cada prato
                foi pensado para o equilíbrio nutricional.
              </p>
              <p className="font-semibold italic pt-2">
                O resultado é uma experiência simples: escolher, pedir e comer
                bem.
              </p>
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
      <section className="bg-white py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((item) => (
              <div key={item.id} className="flex flex-col space-y-6">
                <div className="w-24 h-24 overflow-hidden rounded-md shadow-sm">
                  <img
                    src={item.img}
                    alt={`Diferencial ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-3xl font-extrabold text-gray-900 block">
                    {item.id}
                  </span>
                  <p className="text-gray-700 text-lg md:text-xl leading-tight font-medium max-w-[220px]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24 px-6 md:px-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Comece a <span className="text-[#64a30d]">transformar</span> sua
            alimentação hoje
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Seja para encontrar refeições equilibradas no dia a dia ou para
            levar sua cozinha saudável a mais pessoas, o Nutribox conecta você a
            uma nova forma de consumir alimentação saudável.
          </p>

          <div className="pt-6">
            <Link to="/login/cadastrar">
              <button className="bg-[#f97316] hover:bg-[#e66712] px-12 py-4 cursor-pointer rounded-full font-bold text-white transition-all shadow-lg text-lg uppercase tracking-wide">
                Cadastrar-se
              </button>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-[#8B3D00] text-white py-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/nutribox/logo-white.svg"
                  alt="Nutribox Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm opacity-90 leading-relaxed max-w-[200px]">
                Restaurantes saudáveis conectados em um único hub.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Páginas</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#64a30d] transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#64a30d] transition-colors"
                  >
                    A Nutribox
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#64a30d] transition-colors"
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#64a30d] transition-colors"
                  >
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
