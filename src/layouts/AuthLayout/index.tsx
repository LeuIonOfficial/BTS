import useGetProfile from "../../hooks/useGetProfile.ts";
import { UserContext } from "../../store/index.ts";
import { Navigate, Outlet } from "react-router-dom";
import routes from "@routes/routes.ts";
import LoggedIn from "../LoggedIn/index.tsx";
import { RingLoader } from "react-spinners";
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
    return (
      <div className="flex justify-center items-center h-[100vh] flex-col">
        <RingLoader color="#059e9b" />
      </div>
    );
  }
  return <Navigate to={routes.login} />;
};

export default AuthLayout;
