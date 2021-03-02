import homeLayout from './home.html';
import homeStyle from './home.scss';
import { render } from '../../utils/render';

export default () => {
  return render(homeLayout, homeStyle, '_app');
};
