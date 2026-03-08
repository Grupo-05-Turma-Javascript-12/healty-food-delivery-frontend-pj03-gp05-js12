import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function CategoryLayout() {
  const location = useLocation()

  function getTitle(): string {
    if (location.pathname.includes("cadastrar")) {
      return "Cadastrar Categoria";
    }
    if (location.pathname.includes("editar")) {
      return "Editar Categoria";
    }
    if (location.pathname.includes("deletar")) {
      return "Deletar Categoria";
    }
    return "Categorias";
  }

  return (
    
    <div>
      {getTitle()}
      <Outlet />
    </div>
  )
}

export default CategoryLayout