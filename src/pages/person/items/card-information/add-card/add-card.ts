import { Component } from '@angular/core';
import {  AlertController, NavController  } from 'ionic-angular';

@Component({
  templateUrl: 'add-card.html'
})
export class AddCardPage {
	constructor(public alertCtrl: AlertController, public nav: NavController) {}
	btnAddCard() {
	let alert = this.alertCtrl.create({
      subTitle: 'Success!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.nav.pop();
        }
      }]
    });
    alert.present();
	}
}