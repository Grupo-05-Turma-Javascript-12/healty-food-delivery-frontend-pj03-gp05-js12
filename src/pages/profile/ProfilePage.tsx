import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authcontext/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlert";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "warn");
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex flex-col gap-10">

      <img
        src={user?.foto || "https://i.imgur.com/LDOO4Qs.png"}
        alt="foto perfil"
        className="w-28 h-28 rounded-md object-cover"
      />

      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Nome do Estabelecimento
        </h2>

        <p className="text-gray-600 mt-2">
          {user?.nome || "GreenFuel Kitchen" }
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Email
        </h2>

        <p className="text-gray-600 mt-2">
          {user?.usuario || "contato@greenfuel.com"}
        </p>
      </div>

    </div>
  );
}

export default ProfilePage;
