import { Component } from '@angular/core';
import {Http} from '@angular/http';

import { App, ToastController } from 'ionic-angular';
import { BasicPage } from '../basic/basic';


@Component({
  selector: 'page-about',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
	oSignUp = {
		account:'',
		password:'',
		mobile:''
	}
	token: any;
	http: any;
  constructor(public app: App, http: Http, public toastCtrl: ToastController) {
  		this.http = http;
  }
  btnLoginClick(event) {
    let signupJson = JSON.stringify(this.oSignUp);
  	//let dstUrl = 'http://192.168.1.50:8080/rest/softdart/memberAuth/login';
  	let dstUrl = 'http://115.159.75.162:8998';
  	//var data = JSON.stringify({account: 645});
  	this.http.post(dstUrl, signupJson).subscribe(signupJson => {
		this.token = signupJson._body;
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
 	//this.app.getRootNav().setRoot(BasicPage);

}

