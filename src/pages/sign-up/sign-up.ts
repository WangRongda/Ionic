import { Component } from '@angular/core';

import { App } from 'ionic-angular';
import { BasicPage } from '../basic/basic';

@Component({
  selector: 'page-about',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {

  constructor(public app: App) {

  }
  btnLoginClick(event) {

 	this.app.getRootNav().setRoot(BasicPage);

  }
}
