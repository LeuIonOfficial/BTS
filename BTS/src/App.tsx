import { Navigate, Route, Routes } from "react-router-dom";

import {
  AgentsPage,
  AssignedFlights,
  BadRequest,
  LoginPage,
  NotFound,
  RequestsPage,
  SalesPage,
} from "./pages";
import routes from "./routes/routes.ts";
import { AuthLayout } from "./layouts";
import "./index.scss";

const DashboardRedirect = () => {
  return <Navigate to={routes.authenticated.requests} />;
};

const App = () => {
  return (
    <Routes>
      <Route index element={<DashboardRedirect />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.authenticated.root} element={<AuthLayout />}>
        <Route index element={<DashboardRedirect />} />
        <Route
          path={routes.authenticated.requests}
          element={<RequestsPage />}
        />
        <Route path={routes.authenticated.sales} element={<SalesPage />} />
        <Route path={routes.authenticated.agents} element={<AgentsPage />} />
        <Route
          path={routes.authenticated.assignedFlights}
          element={<AssignedFlights />}
        />
      </Route>
      <Route path={routes.notFound} element={<NotFound />} />
      <Route path={routes.badRequest} element={<BadRequest />} />
    </Routes>
  );
};

export default App;
