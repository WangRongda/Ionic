import { Component } from '@angular/core';
import { App, ToastController } from 'ionic-angular';
import {Http} from '@angular/http';

import { BasicPage } from '../basic/basic';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {
  	oLogin = {
		account: '',
		password: ''
	};
	token = "";
	http: any;
  constructor(private app: App, http: Http, public toastCtrl: ToastController) {
  	this.http = http;
  }
  btnLoginClick(event) {
  	let loginJson = JSON.stringify(this.oLogin);
  	//let dstUrl = 'http://192.168.1.50:8080/rest/softdart/memberAuth/login';
  	let dstUrl = 'http://115.159.75.162:8998';
  	//var data = JSON.stringify({account: 645});
  	this.http.post(dstUrl, loginJson).subscribe(loginJson => {
		this.token = loginJson._body;
  		alert(this.token);
  	}, error => {
  		this.notice("请检查您的网络");
  	}); 
  	//this.app.getRootNav().setRoot(BasicPage);
  }

   notice(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}
