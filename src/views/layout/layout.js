import layoutView from './layout.html';
import layoutStyle from './layout.scss';
import { render } from '../../utils/render';

export default class Layout {
  constructor() {
    this.idSelector = 'root';
    render(layoutView, layoutStyle, this.idSelector);
  }
}

