const authenticatedRoot = "/u";

const routes = {
  authenticated: {
    root: authenticatedRoot,
    dashboard: authenticatedRoot + "/dashboard",
    requests: authenticatedRoot + "/requests",
    agents: authenticatedRoot + "/agents",
  },
  login: "/login",
};

export default routes;
