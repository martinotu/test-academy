import { Page } from './Page';

class TshirtsPage extends Page {
  constructor() {
    super();
    this.checkPoint = ".cat-name*=T-shirts";
  }

}
export default new TshirtsPage();
