import useGetProfile from "../../hooks/useGetProfile.ts";
import { UserContext } from "../../store";
import { Navigate, Outlet } from "react-router-dom";
import routes from "@routes/routes.ts";
import LoggedIn from "../LoggedIn";
const AuthLayout = () => {
  const { profile, isSuccess, isLoading } = useGetProfile();

  if (isSuccess) {
    return (
      <UserContext.Provider value={profile}>
        <LoggedIn>
          <Outlet />
        </LoggedIn>
      </UserContext.Provider>
    );
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <Navigate to={routes.login} />;
};

export default AuthLayout;
