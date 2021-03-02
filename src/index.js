// Style
import './styles/index.scss';

// Components
import Navbar from './components/navbar/navbar';
import Button from './components/button/button';

customElements.define('my-navbar', Navbar);
customElements.define('my-btn', Button);

// Views
import Layout from './views/layout/layout';
import Home from './views/home/home';
import Dashboard from './views/dashboard/dashboard';

const layout = new Layout();

// Router & routes
import Router from './router/router';
import dashboard from './views/dashboard/dashboard';

const routes = [
  {
    path: '/',
    name: 'Home',
    view: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    view: Dashboard,
  },
];

const router = new Router(routes);
