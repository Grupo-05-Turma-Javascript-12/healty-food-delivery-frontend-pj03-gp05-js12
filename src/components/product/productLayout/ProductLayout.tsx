import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';

function ProductLayout() {

  const location = useLocation();

  const getTitle = (): string => {
    if (location.pathname.includes("cadastrar")) {
      return "Cadastrar Produto";
    }
    if (location.pathname.includes("editar")) {
      return "Editar Produto";
    }
    if (location.pathname.includes("deletar")) {
      return "Deletar Produto";
    }
    return "Produtos";
  };

  return (
    <div>
      {getTitle()}
      <Outlet />
    </div>
  )
}

export default ProductLayout