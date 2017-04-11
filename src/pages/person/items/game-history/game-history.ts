import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GameHistoryDetailPage } from './game-history-detail/game-history-detail';

@Component({
  templateUrl: 'game-history.html'
})
export class GameHistoryPage {
	constructor(public navCtrl: NavController, public navParams: NavParams) {}
	historyCardClick() {
		this.navCtrl.push(GameHistoryDetailPage);
	}
}