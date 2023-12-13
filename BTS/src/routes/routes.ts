const authenticatedRoot = "/u";

const routes = {
  authenticated: {
    root: authenticatedRoot,
    requests: authenticatedRoot + "/requests",
    agents: authenticatedRoot + "/agents",
    sales: authenticatedRoot + "/sales",
  },
  login: "/login",
  notFound: "*",
  badRequest: "/400",
};

export default routes;
