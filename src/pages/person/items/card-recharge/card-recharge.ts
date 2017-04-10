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
	
	selectCard() {
		let alert = this.alertCtrl.create({
			message: `
			<ion-list radio-group>
		  <ion-list-header>
		    Language
		  </ion-list-header>
		
		  <ion-item>
		    <ion-label>Go</ion-label>
		    <ion-radio checked="true" value="go"></ion-radio>
		  </ion-item>
		
		  <ion-item>
		    <ion-label>Rust</ion-label>
		    <ion-radio value="rust"></ion-radio>
		  </ion-item>
		
		  <ion-item>
		    <ion-label>Python</ion-label>
		    <ion-radio value="python" disabled="true"></ion-radio>
		  </ion-item>
			</ion-list>
			`
		});
    alert.present();
    
	}
}