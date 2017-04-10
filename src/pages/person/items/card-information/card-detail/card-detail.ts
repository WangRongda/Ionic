import { Component } from '@angular/core';
import { NavParams, ActionSheetController } from 'ionic-angular';

import { CardRechargePage } from '../card-information/card-information';

@Component({
  templateUrl: 'card-detail.html',
})
export class CardDetailPage {
  item: any;
  recharge: any;
  constructor(params: NavParams, public actionSheetCtrl: ActionSheetController, public rec: CardRechargePage) {
    this.item = params.data.item;
    this.recharge = rec.btnRechargeClick;
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
          text: operateStatus,
          //role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '解绑',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}