import { useContext } from "react";
import { AuthContext } from "../../../contexts/authcontext/AuthContext";
import { Link } from "react-router-dom";

function ProfileAside() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col gap-6">
      <div className="border border-gray-300 rounded-xl p-4 flex items-center gap-5">
        <img
          src="https://i.imgur.com/LDOO4Qs.png"
          alt="comida"
          className="w-16 h-25 rounded-lg object-cover object-top"
        />

        <div className="flex flex-col items-center flex-1 gap-2">
          <img
            src={user?.foto || "https://i.imgur.com/LDOO4Qs.png"}
            alt="perfil"
            className="w-10 h-10 rounded object-cover"
          />

          <div className="text-[#60A907] text-[10px] leading-tight text-center">
            <p className="font-semibold">
              {user?.nome || "Nome do estabelecimento"}
            </p>
            <p>{user?.usuario || "email@email.com"}</p>
          </div>
        </div>
      </div>

      <Link
        to={`/usuario/editar/${user.id}`}
        className="bg-[#60A906] text-white py-2 rounded-md text-sm  text-center"
      >
        Atualizar Perfil
      </Link>
    </div>
  );
}

export default ProfileAside;
