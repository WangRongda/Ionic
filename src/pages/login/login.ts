import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasicPage } from '../basic/basic'

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(private nav: NavController) {
  }
  btnLoginClick(event) {
  	this.nav.setRoot(BasicPage).then(() =>{
	});

  }
}
