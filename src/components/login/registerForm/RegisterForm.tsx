import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import type User from '../../../models/User' 
import { registerUser } from '../../../services/Service' 

function RegisterForm() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmarSenha, setConfirmarSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      navigate('/login')
    }
  }, [usuario, navigate])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true)
      try {
        await registerUser(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }
    } else {
      alert('As senhas não conferem ou são muito curtas (mínimo 8 caracteres).')
    }
    setIsLoading(false)
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full font-sans bg-white">
      <section className="relative flex justify-center items-center p-6 sm:p-12 lg:p-20">
        <nav className="absolute top-4 left-8 sm:top-6 sm:left-12 lg:top-8 lg:left-24">
          <Link to="/login" className="inline-flex items-center gap-2 px-6 py-1.5 border border-[#8fc549] text-[#8fc549] rounded-full hover:bg-[#8fc549] hover:text-white transition-all text-sm lowercase">
            <span>←</span> voltar
          </Link>
        </nav>

        <div className="w-full max-w-[420px] mt-24 lg:mt-0">
          <h2 className="text-slate-900 text-3xl font-bold mb-8 text-left">Cadastrar-se</h2>
          
          <form className="flex flex-col w-full gap-3" onSubmit={cadastrarNovoUsuario}>
            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="nome" className="font-bold text-gray-800 text-xs">Nome</label>
              <input
                type="text" id="nome" name="nome" placeholder="Digite seu nome ou do estabelecimento"
                className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-[#ff9f00] focus:border-[#ff9f00] placeholder:text-gray-200"
                value={usuario.nome} onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="usuario" className="font-bold text-gray-800 text-xs">Email</label>
              <input
                type="text" id="usuario" name="usuario" placeholder="Digite seu email"
                className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-[#ff9f00] focus:border-[#ff9f00] placeholder:text-gray-200"
                value={usuario.usuario} onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="senha" className="font-bold text-gray-800 text-xs">Senha</label>
              <input
                type="password" id="senha" name="senha" placeholder="Digite uma senha"
                className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-[#ff9f00] focus:border-[#ff9f00] placeholder:text-gray-200"
                value={usuario.senha} onChange={atualizarEstado}
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="confirmarSenha" className="font-bold text-gray-800 text-xs">Digite a senha novamente</label>
              <input
                type="password" id="confirmarSenha" placeholder="Repita aqui sua senha"
                className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-[#ff9f00] focus:border-[#ff9f00] placeholder:text-gray-200"
                value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 text-left">
              <label htmlFor="foto" className="font-bold text-gray-800 text-xs">Foto</label>
              <input
                type="text" id="foto" name="foto" placeholder="Digite o link de uma foto"
                className="border border-gray-300 rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-[#ff9f00] focus:border-[#ff9f00] placeholder:text-gray-200"
                value={usuario.foto} onChange={atualizarEstado}
              />
            </div>

            <button type='submit' className="rounded-lg bg-[#ff9f00] hover:bg-[#e89000] text-white w-full py-2.5 mt-4 font-bold text-sm flex justify-center items-center transition-all shadow-sm">
              { isLoading ? <ClipLoader color="#ffffff" size={18} /> : <span>Cadastrar-se</span> }
            </button>

            <p className="mt-2 text-[13px] text-left">
              <span className="text-[#8fc549]">Já é cliente NutriBox? </span>
              <Link to="/login" className="text-[#8fc549] font-bold hover:underline">Entre na sua conta</Link>
            </p>
          </form>
        </div>
      </section>

      <aside className="hidden lg:block w-full h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/photos/03.png')" }} />
    </main>
  );
}

export default RegisterForm;