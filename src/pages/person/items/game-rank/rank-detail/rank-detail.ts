import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	templateUrl: 'rank-detail.html'
})

export class RankDetailPage {
	rankObj: any;
	dayRankObj = {
		myScore: 78,
		board: [
			{ member: "zhangsan",
			  score: 100},
			{ member: "lisi",
			  score: 90} ,
			{ member: "wangwu",
			  score: 90},
			{ member: "wangxiaoer",
				score: 90}
		]
	}
	monthRankObj = {
		myScore: 90,
		board: [
			{ member: "zhangsan",
			  score: 90},
			{ member: "lisi",
			  score: 100} ,
			{ member: "wangwu",
			  score: 60},
			{ member: "wangxiaoer",
				score: 90}
		]
	}
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		let time = navParams.data.time;
		if (time == 'day') { this.rankObj = this.dayRankObj; }
		else { this.rankObj = this.monthRankObj; }

		this.rankObj.board.sort(function(property1, property2) {
			return property2.score - property1.score;
		});
		(function(arg) {
			let oRank = arg.board;
			oRank[0]['rank'] = 1;
			let n = 1;
			for (let i = 1; i < oRank.length; i++) {
				if (oRank[i].score === oRank[i-1].score)
					oRank[i]['rank'] = n;
				else 
					oRank[i]['rank'] = ++n;
			}
		})(this.rankObj);

	}
}