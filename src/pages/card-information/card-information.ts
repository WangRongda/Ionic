import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CardDetailPage } from './card-detail/card-detail';
import { AddCardPage } from './add-card/add-card';

@Component({
  templateUrl: 'card-information.html'
})
export class CardInformationPage {
  title: any;
	items = [];
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.title = navParams.data.title;
  	this.items = [
    	{
    		// 'label': 'Card1',
    		'number': '123456ABCD',
    		'point': '5',
    		'status': '绑定',
    		'record': {
    		  rating: 0,
    		  ppd: 0,
    		  mpr: 0
    		}
     	},
     	{
     	// 	'label': 'Card2',
     		'number': '6666666ZZZZ',
     		'point': '500',
     		'status': '挂失',
     		'record': {
     		  rating: 100,
     		  ppd: 90,
     		  mpr: 80
     		}
     	}
   	]
  }
  btnCardsClick(item) {
  	this.navCtrl.push(CardDetailPage, { item: item });
  }
  btnAddCard() {
     this.navCtrl.push(AddCardPage);
  }
}