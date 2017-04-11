import { Component } from '@angular/core';
import { NavParams, NavController, ActionSheetController } from 'ionic-angular';

import { CardRechargePage } from '../../card-recharge/card-recharge';
import { PointTransferPage } from './point-transfer/point-transfer'

@Component({
  templateUrl: 'card-detail.html',
})
export class CardDetailPage {
  item: any;
  constructor(params: NavParams, public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController) {
    this.item = params.data.item;
  }

  cardDetailOperate() {
  	let operateStatus = '挂失';
  	if ('挂失' == this.item.status) {
  		operateStatus = '解除挂失'
  	}
   	let actionSheet = this.actionSheetCtrl.create({
      title: 'Operation',
      buttons: [
        {
          //挂失/解除挂失
          text: operateStatus,
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '解绑',
          handler: () => {
            // console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  btnCharge() {
    this.navCtrl.push(CardRechargePage, { bool: true, number: this.item.number, fontColor: 'gray'});
  }
  btnTransfer() {
    this.navCtrl.push(PointTransferPage);
  }
}