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
          //role: 'destructive',
          handler: () => {
            this.nav.pop();
       }
    }]
    });
    alert.present();
    //alert.onDismiss(() => this.nav.popTo(1));
    //alert.dismiss(() => console.log('The alert has been closed.'));
	}
}