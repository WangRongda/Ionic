import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { BasicPage } from '../basic/basic';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(private app: App) {
  }
  btnLoginClick(event) {

  	this.app.getRootNav().setRoot(BasicPage);

  }
}
