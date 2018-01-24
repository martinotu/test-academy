import { Page } from './Page';

class LoginPage extends Page {
  constructor() {
    super();
    this.checkPoint = ".page-heading*=Authentication";
    this.path = "/index.php?controller=authentication"; //show how to access directly to this page
  }

  //*****  elements definition  *****
  get emailFld()  { return browser.element("body #email"); }   //using id
  get passwdFld() { return browser.elements("//*[contains(@id, 'passwd')]"); }   //using xpath
  get loginBtn()  { return browser.element("body #SubmitLogin"); }   //using id
  get errorDiv()  { return browser.element(".alert.alert-danger"); }   //using css


  //*****  page funtions *****
  loginAs(email, passwd) {
    this.emailFld.setValue(email);
    this.passwdFld.setValue(passwd);
    this.loginBtn.click()
  }

}
export default new LoginPage();
