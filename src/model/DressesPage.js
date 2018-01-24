import { Page } from './Page';

class DressesPage extends Page {
  constructor() {
    super();
    this.checkPoint = ".title_block*=Dresses";
  }

}
export default new DressesPage();
