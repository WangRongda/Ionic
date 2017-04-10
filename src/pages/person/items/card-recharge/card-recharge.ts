import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';

@Component({
  templateUrl: 'card-recharge.html'
})
export class CardRechargePage {
	price: any;
	constructor(public navCtrl: NavController, public navParams: NavParams,
		public alertCtrl: AlertController) {}
	btnRechargeClick(event) {
	let alert = this.alertCtrl.create({
      //title: 'New Friend!',
      subTitle: '充值成功!',
      buttons: ['OK']
    });
    alert.present();
	}
	onChangeTime(e) {
		this.price = e;
	}
}