import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';

function ProfileLayout() {

  const location = useLocation();

  const getTitle = (): string => {
    if (location.pathname.includes("editar")) {
      return "Editar Perfil";
    }
    return "Meu Perfil";
  };

  return (
    <div>
      {getTitle()}
      <Outlet />
    </div>
  )
}

export default ProfileLayout