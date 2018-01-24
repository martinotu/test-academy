import { Page } from './Page';

class WomanPage extends Page {
  constructor() {
    super();
    this.checkPoint = ".title_block*=Women";
  }

}
export default new WomanPage();
