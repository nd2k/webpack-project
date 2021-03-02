import './styles/index.scss';

import Navbar from './components/navbar/navbar';
import Component from '../src/components/component';

customElements.define('my-navbar', Navbar);
customElements.define('my-component', Component);
