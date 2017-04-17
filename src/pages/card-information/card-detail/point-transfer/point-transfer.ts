import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';

@Component({
  templateUrl: 'point-transfer.html'
})
export class PointTransferPage {
  price: any;
  card: any = { 
    number : '',
    bool : false, // is readonly
    fontColor : 'black'
  }
  constructor(public navCtrl: NavController, public params: NavParams,
    public alertCtrl: AlertController) {
//    this.card.number = params.data.number;
//    this.card.bool = params.data.bool;
//    this.card.fontColor = params.data.fontColor;
  }
  btnRechargeClick(event) {
  let alert = this.alertCtrl.create({
      //title: 'New Friend!',
      subTitle: '充值成功!',
      buttons: ['OK']
    });
    alert.present();
  }
  onChangeTime(e) {
    this.price = e * 2;
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
  btnPointTransfer() {
    alert('转移成功');
  }
}