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

  return <div>ProfilePage</div>;
}

export default ProfilePage;
