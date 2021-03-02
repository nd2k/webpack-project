export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.listen(this.routes);
  }

  listen = (routes) => {
    const app = document.getElementById('_app');
    let currentPath = document.location.pathname;
    let navbarLinks = document.getElementById('_navbar').shadowRoot;
    let accessibleRoutes = [];
    accessibleRoutes.push(
      ...Array.from(navbarLinks.querySelectorAll('[route]'))
    );
    accessibleRoutes.forEach((route) => {
      route.addEventListener('click', this.navigate);
    });

    let route = routes.filter((r) => {
      let isMatch = r.path === currentPath;
      if (isMatch) {
        return isMatch;
      }
      return r.path === '/error';
    })[0];
    window.history.pushState({ navigate: `${route.path}` }, 'name', route.path);
    app.innerHTML = '';
    route.view();
  };

  navigate = (event) => {
    const app = document.getElementById('_app');
    let targetRoute =
      event.path[0].attributes[0].value ||
      (event.composePath().attributes[1].value &&
        event.composedPath().attributes[1].value) ||
      composedPath(event.target.attributes[1].value);
    let route = this.routes.filter((r) => {
      let isMatch = r.path === targetRoute;
      if (isMatch) {
        return isMatch;
      }
      return r.path === '/error';
    })[0];

    window.history.pushState({ navigate: `${route.path}` }, 'name', route.path);
    app.innerHTML = '';
    route.view();
  };
}
