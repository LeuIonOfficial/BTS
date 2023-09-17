const authenticatedRoot = "/u";

const routes = {
  authenticated: {
    root: authenticatedRoot,
    dashboard: authenticatedRoot + "/dashboard",
    requests: authenticatedRoot + "/requests",
    agents: authenticatedRoot + "/agents",
    sales: authenticatedRoot + "/sales",
  },
  login: "/login",
};

export default routes;
