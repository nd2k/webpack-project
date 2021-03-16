// Style
import './styles/index.scss';

// Components
import Navbar from './components/navbar/navbar';
import ListExpense from './components/listExpense/listExpense';
import AddExpense from './components/addExpense/addExpense';

import Card from './components/UI/card/card';
import Button from './components/UI/button/button';
import Form from './components/UI/form/form';
import FormField from './components/UI/form-field/form-field';
import Modal from './components/UI/modal/modal';
import FormSelect from './components/UI/form-select/form-select';
import DataList from './components/UI/dataList/dataList';

customElements.define('my-navbar', Navbar);
customElements.define('list-expense', ListExpense);
customElements.define('add-expense', AddExpense);

customElements.define('my-card', Card);
customElements.define('my-btn', Button);
customElements.define('my-form', Form);
customElements.define('my-form-field', FormField);
customElements.define('my-modal', Modal);
customElements.define('my-form-select', FormSelect);
customElements.define('my-data-list', DataList);

// Views
import Layout from './views/layout/layout';
import Home from './views/home/home';
import Dashboard from './views/dashboard/dashboard';

const layout = new Layout();

// Router & routes
import Router from './router/router';

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
