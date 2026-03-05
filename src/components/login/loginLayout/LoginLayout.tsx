import { Outlet, useLocation } from 'react-router-dom';

function LoginLayout() {

  const location = useLocation();

  const getTitle = (): string => {
    if (location.pathname.includes("cadastrar")) {
      return "Cadastrar Usuário";
    }
    return "Entre na platafora Nutribox";
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Outlet />
    </div>
  )
}

export default LoginLayout