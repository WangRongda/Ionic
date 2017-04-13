import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PersonInformationPage } from './items/person-information/person-information';
import { CardRechargePage } from './items/card-recharge/card-recharge';
import { CardInformationPage } from './items/card-information/card-information';
import { GameHistoryPage } from './items/game-history/game-history';
import { GameRankPage } from './items/game-rank/game-rank';
import { SettingPage } from './items/setting/setting';
import { LoginSignupPage } from './items/login-signup/login-signup';



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
	childPage = {
  	personInformationPage: { title: '个人资料', page: LoginSignupPage },
  	cardInformationPage : { title: '我的点卡', page: CardInformationPage },
  	gameHistoryPage : { title: '游戏历史', page: GameHistoryPage },
  	gameRankPage : { title: '我的榜单', page: GameRankPage},
  	settingPage : { title: '设置', page: SettingPage}
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  navPush(target) {
    this.navCtrl.push(target.page, { title: target.title });
  }
}
