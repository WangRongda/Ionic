import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	templateUrl: 'game-history-detail.html'
})

export class GameHistoryDetailPage {
	keys: any;
	gameData = {
		member: 123,
		MPR: 12.34,
		PPD: 56.78,
		countup: 123,
		hatTrick: 123,
		'5mark': 123,
		'6mark': 123,
		'7mark': 123,
		'8mark': 123,
		'9mark': 123,
		'3inBlack': 123,
		'3inBed': 123,
		whiteHorse: 123,
		lowTon: 123,
		highTon: 123,
		ton80: 123,
		result: 0
	}
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.keys = Object.keys(this.gameData);
	}
}