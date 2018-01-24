export class Page {
  
  isLoaded() {
    if (this.checkPoint) {
      browser.waitForVisible(this.checkPoint);
      //console.log("\t Page: " + this.constructor.name + " loaded - checkpoint: " + this.checkPoint);
    }
    else {
      throw "checkPoint not defined for " + this.constructor.name;
    }
  }

  open() {
    if (this.path) {
      browser.url(this.path);
      this.isLoaded();
    }
    else {
      throw "URL path not defined for " + this.constructor.name;
    }
  }
  

}
