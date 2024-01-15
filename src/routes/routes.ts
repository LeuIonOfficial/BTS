const authenticatedRoot = "/u";

const routes = {
  authenticated: {
    root: authenticatedRoot,
    requests: authenticatedRoot + "/requests",
    agents: authenticatedRoot + "/agents",
    sales: authenticatedRoot + "/sales",
    assignedFlights: authenticatedRoot + "/:page/:id/",
  },
  login: "/login",
  notFound: "*",
  badRequest: "/400",
};

export default routes;
