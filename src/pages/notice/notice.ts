import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Notice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html'
})
export class NoticePage {
	area = {
		北京: 1, 
		杭州: 2,
		上海: 3,
		深圳: 4
	}
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
  }

}
