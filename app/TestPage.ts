import { Page } from 'ui/page';

export class TestPage extends Page {

  public onLoaded() {
    super.onLoaded();
    
    // using application.run(navigation_entry) will caused the this.frame to be undefined
    /*
    let navController = this.frame.ios.controller;
    let navigationBar = navController ? navController.navigationBar : null;
    if (navigationBar) {
      // the view is being shifted down when translucent is set to false.
      navigationBar.translucent = false;
    }
    */
  }
}
