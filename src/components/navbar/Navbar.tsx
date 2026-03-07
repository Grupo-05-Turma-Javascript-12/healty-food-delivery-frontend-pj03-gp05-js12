import React, { useContext, type ReactNode } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/authcontext/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlert'

function Navbar() {

  const navigate = useNavigate()
  const { user, handleLogout } = useContext(AuthContext)
  let component : ReactNode

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate('/')
  }

  if (user.token == "") {
    component = (
      <div className="flex mx-35 my-10 items-center justify-between md:flex-row sm:flex-col flex-wrap sm:gap-2">
        <div>
          <Link to="/produtos">
            <img
              src="/nutribox/logo-horizontal.svg"
              alt="logo nutribox"
              className="h-5"
            />
          </Link>
        </div>
        <div className="flex items-center md:flex-row  sm:flex-col sm:gap-4 md:gap-12 text-slate-900 flex-wrap">
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-lime-600 font-semibold"
                  : "text-slate-900 hover:text-amber-500"
              }`
            }
          >
            <span>Produtos</span>
          </NavLink>
          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-lime-600 font-semibold"
                  : "text-slate-900 hover:text-amber-500"
              }`
            }
          >
            <span className="hover:text-amber-600">Categorias</span>
          </NavLink>
          <NavLink
            to="/usuario"
            className={({ isActive }) =>
              `transition-colors ${
                isActive
                  ? "text-lime-600 font-semibold"
                  : "text-slate-900 hover:text-amber-500"
              }`
            }
          >
            <span className="hover:text-amber-600">Perfil</span>
          </NavLink>
        </div>
        <div className=" bg-amber-500 hover:bg-amber-700 py-1 px-7 rounded-2xl shadow text-slate-50 font-semibold transition-colors">
          <button onClick={logout}>Sair</button>
        </div>
      </div>
    );
  }

  return (
    <>
      { component }
    </>
  )
}

export default Navbar