const authenticatedRoot = "/u";

const routes = {
  authenticated: {
    root: authenticatedRoot,
    requests: authenticatedRoot + "/requests",
    agents: authenticatedRoot + "/agents/:id?",
    sales: authenticatedRoot + "/sales",
  },
  login: "/login",
  notFound: "*",
  badRequest: "/400",
};

export default routes;
