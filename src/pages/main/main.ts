import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NoticePage } from '../notice/notice';

/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  buttonc(event) {
  	 //this.navCtrl.push(NoticePage);
  	this.nav.popToRoot();

  }

}
