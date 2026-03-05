import React, { useContext, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
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

  if (user.token !== "") {
    component = (
      <div>

      </div>
    )
  }

  return (
    <>
      { component }
    </>
  )
}

export default Navbar