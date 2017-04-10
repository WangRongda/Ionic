import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PersonInformationPage } from './items/person-information/person-information';
import { CardRechargePage } from './items/card-recharge/card-recharge';
import { CardInformationPage } from './items/card-information/card-information';
import { GameHistoryPage } from './items/game-history/game-history';
import { GameRankPage } from './items/game-rank/game-rank';
import { SettingPage } from './items/setting/setting';
import { AboutPage } from './items/about/about';


/*
  Generated class for the Person page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {
	items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.items = [
  	{
  		'title': '个人信息',
  		'page': PersonInformationPage
   	},
   	{
   		'title': '点卡充值',
   		'page': CardRechargePage
   	},
   	{
   		'title': '点卡信息',
   		'page': CardInformationPage
   	},
   	{
   		'title': '游戏记录',
   		'page': GameHistoryPage
   	},
   	{
   		'title': '游戏榜单',
   		'page': GameRankPage
   	},
   	{
   		'title': '设置',
   		'page': SettingPage
   	},
   	{
   		'title': '关于',
   		'page': AboutPage
   	}
   	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

   OpenItemOfPersonTab(item) {
    //this.navCtrl.push(ItemOfPersonTab, { item: item });
    this.navCtrl.push(item.page);
  }
}
