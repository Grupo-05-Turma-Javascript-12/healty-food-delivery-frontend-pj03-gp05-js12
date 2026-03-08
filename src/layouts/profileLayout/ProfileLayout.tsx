import { Outlet, useLocation } from "react-router-dom";
import ProfileAside from "../../components/profile/profileAside/ProfileAside";


function ProfileLayout() {

  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.includes("editar")) {
      return "Atualizar Perfil";
    }
    return "Perfil";
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 grid grid-cols-12 gap-12">

      
      <div className="col-span-3 border-r pr-10">
        <ProfileAside />
      </div>

      <div className="col-span-9">

        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          {getTitle()}
        </h1>

        <Outlet />

      </div>

    </div>
  );
}

export default ProfileLayout;