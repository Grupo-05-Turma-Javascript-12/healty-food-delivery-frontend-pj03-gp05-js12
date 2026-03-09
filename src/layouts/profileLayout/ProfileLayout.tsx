import { Outlet, useLocation } from "react-router-dom";
import ProfileAside from "../../components/profile/profileAside/ProfileAside";


function ProfileLayout() {

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#f8fafc_35%,#eef2f7_100%)]">
      <div className="flex flex-col gap-8 p-6 lg:flex-row lg:p-10">
        <ProfileAside/>
        <div className="flex-1">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;