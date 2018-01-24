import { Page } from './Page';

class HomePage extends Page {
  constructor() {
    super();
    this.checkPoint = "body #slider_row"; //make the id part of css as there is a bug and id doesn't work on marionette 
    this.path = "/";
  }
  
  //*****  elements definition  *****
  get searchFld()   { return browser.element(".search_query.form-control.ac_input"); }  //by id
  get itemsList()   { return browser.elements(".product-listing"); }  //by css
  get noResults()   { return browser.element("//*[contains(@class, 'alert alert-warning')]"); } //by xpath
  get womanBtn()    { return browser.element("//*[contains(@title, 'Women')]"); } //by xpath
  
  get dressesBtn()  { return browser.element("(//a[contains(@title,'Dresses')])[5]"); }   //by xpath
  //get dressesBtn()  { return browser.element("=DRESSES"); }   //by text link
  
  get tshirtsBtn()  { return browser.element("(//a[contains(@title,'T-shirts')])[2]"); }  //by xpath
  //get tshirtsBtn()  { return browser.element("=T-SHIRTS"); }  //by text link
  
  get loginLnk()    { return browser.element("=Sign in");}    //by text link
  get profileLnk()  { return browser.element(".account"); }  //by css 
  get signOutLnk()  { return browser.element("//*[contains(@title, 'Log me out')]"); } //by xpath
  
  
  //*****  page functions *****
  goToWoman() {
    this.womanBtn.waitForClickable()
    this.womanBtn.click();
  }

  goToDresses() {
    this.dressesBtn.waitForClickable();
    this.dressesBtn.click();
  }

  goToTshirts() {
    this.tshirtsBtn.waitForClickable();
    this.tshirtsBtn.click();
  }

  goToLogin(){
    this.loginLnk.waitForClickable();
    this.loginLnk.click();
  }

  isAuthenticated(){
    return this.profileLnk.isVisible();
  }

  logout(){
    this.signOutLnk.waitForClickable();
    this.signOutLnk.click();
  }
}
export default new HomePage();
