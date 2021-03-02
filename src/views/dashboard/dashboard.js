import dashboardLayout from './dashboard.html';
import dashboardStyle from './dashboard.scss';
import { render } from '../../utils/render';

export default () => {
  return render(dashboardLayout, dashboardStyle, '_app');
};
