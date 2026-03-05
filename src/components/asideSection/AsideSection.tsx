import { useLocation } from "react-router-dom";
import { useContext, type ReactNode } from "react";
import ProductAside from "../product/productAside/ProductAside";
import ProfileAside from "../profile/profileAside/ProfileAside";
import { AuthContext } from "../../contexts/authcontext/AuthContext";
import CategoryAside from "../category/categoryAside/CategoryAside";

function AsideSection() {
  const location = useLocation();
  const { user } = useContext(AuthContext)
  let asideComponent: ReactNode;
  let component: ReactNode;

  if (location.pathname.includes("categorias")) asideComponent = <CategoryAside />
  if (location.pathname.includes("produtos")) asideComponent = <ProductAside />;
  if (location.pathname.includes("usuario")) asideComponent = <ProfileAside />;

  if (user.token == "") {
    component = (
      <div>
        <h1>Aside Section</h1>
        { asideComponent }
      </div>
    )
  }

  return (
    <>
      { component }
    </>
  );
}

export default AsideSection;
