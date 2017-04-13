import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NoticePage } from '../notice/notice';
import { GameRankPage } from '../person/items/game-rank/game-rank';
import { CardRechargePage } from '../person/items/card-recharge/card-recharge';


/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  childPage = {
    cardRechargePage : { title: '点卡充值', page: CardRechargePage },
    gameRankPage: { title: '游戏榜单', page: GameRankPage },
    noticePage: { title: '查看公告', page: NoticePage }
  }
  keys = Object.keys(this.childPage);
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
// 	this.items = [
//   	{
//   		'title': '点卡充值',
//   		'page': CardRechargePage
//   	},
//   	{
//   		'title': '查看榜单',
//   		'page': CardInformationPage
//   	},
//   	{
//   		'title': '比赛记录',
//   		'page': GameHistoryPage
//   	},
//   	{
//   		'title': '游戏榜单',
//   		'page': GameRankPage
//   	},
//   	{
//   		'title': '设置',
//   		'page': SettingPage
//   	},
//   	{
//   		'title': '关于',
//   		'page': AboutPage
//   	}
//   	]

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  
  navPush(target) {
    this.navCtrl.push(target.page, { title: target.title });
  }
}
