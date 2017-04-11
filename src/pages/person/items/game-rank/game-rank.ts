import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RankDetailPage } from './rank-detail/rank-detail';

@Component({
  templateUrl: 'game-rank.html'
})
export class GameRankPage {
	constructor(public navCtrl: NavController, public navParams: NavParams) {}
	btnRank(time) {
		this.navCtrl.push(RankDetailPage, { time: time });
	}
}