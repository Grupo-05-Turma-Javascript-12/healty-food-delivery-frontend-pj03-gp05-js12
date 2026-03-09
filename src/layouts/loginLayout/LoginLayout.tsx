import { Outlet} from 'react-router-dom';

function LoginLayout() {


  return (
    <div className="w-full min-h-screen flex flex-col">
      <Outlet />
    </div>
  )
}

export default LoginLayout