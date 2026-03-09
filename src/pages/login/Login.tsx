import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/authcontext/AuthContext";
import type UserLogin from "../../models/UserLogin";

function Login() {
  const navigate = useNavigate();
  const { user, handleLogin, isLoading } = useContext(AuthContext);

  const [userLoginState, setUserLoginState] = useState<UserLogin>(
    {} as UserLogin
  );

  useEffect(() => {
    if (user.token !== "") {
      navigate("/produtos");
    }
  }, [user]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUserLoginState({
      ...userLoginState,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(userLoginState);
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full font-sans bg-white">
      <section className="relative flex justify-center items-center p-6 sm:p-12 lg:p-20">
        <nav className="absolute top-8 left-8 sm:top-12 sm:left-12 lg:top-16 lg:left-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-1.5 border border-[#8fc549] text-[#8fc549] rounded-full hover:bg-[#8fc549] hover:text-white transition-all text-sm lowercase"
          >
            <span>←</span> voltar
          </Link>
        </nav>

        <div className="w-full max-w-95 mt-20 lg:mt-0">
          <h2 className="text-slate-900 text-3xl font-bold mb-10 text-left">
            Entrar
          </h2>

          <form className="flex flex-col w-full gap-5" onSubmit={login}>
            <div className="flex flex-col gap-1 text-left">
              <label
                htmlFor="usuario"
                className="font-bold text-gray-800 text-xs"
              >
                Email
              </label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Digite seu email"
                className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-[#ff9f00] focus:border-[#ff9f00] placeholder:text-gray-200"
                value={userLoginState.usuario || ""}
                onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label
                htmlFor="senha"
                className="font-bold text-gray-800 text-xs"
              >
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-[#ff9f00] focus:border-[#ff9f00] placeholder:text-gray-200"
                value={userLoginState.senha || ""}
                onChange={atualizarEstado}
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-[#ff9f00] hover:bg-[#e89000] text-white w-full py-2.5 mt-2 font-bold text-sm flex justify-center items-center transition-all shadow-sm active:scale-95"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={18} />
              ) : (
                <span>Entrar</span>
              )}
            </button>

            <p className="mt-2 text-[13px] text-left">
              <span className="text-[#8fc549]">É novo na plataforma? </span>
              <Link
                to="/login/cadastrar"
                className="text-[#8fc549] font-bold hover:underline"
              >
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </section>

      <aside
        className="hidden lg:block w-full h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/photos/03.png')" }}
      />
    </main>
  );
}

export default Login;
