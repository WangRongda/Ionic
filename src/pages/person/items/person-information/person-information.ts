import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModifiedPersonInPage } from './modified-person-information/modified-person-information';

@Component({
  templateUrl: 'person-information.html'
})
export class PersonInformationPage {
	keys: any
	personObj = {
		account: 'wawnw1',
		label: 'Hybird',
		area: 5,
		birth: '2017/4/11',
		gender: 1,
		email: '123899696@qq.com',
		mobile: '159383299',
		portrait: 'zcfe',
		registerTime: '2017/04/11',
		rating: '2',
		cards: [
		'23948341234124',
		'23412341234212'
		]
	}
	styleObj = {
		account: { modified: false, fontColor: 'gray' },
		label: { modified: true, fontColor: 'black' },
		area: { modified: true, fontColor: 'black' },
		birth: { modified: true, fontColor: 'black' },
		gender: { modified: false, fontColor: 'gray' },
		email: { modified: true, fontColor: 'black' },
		mobile: { modified: true, fontColor: 'black' },
		portrait: { modified: false, fontColor: 'gray' },
		registerTime: { modified: false, fontColor: 'gray' },
		rating: { modified: false, fontColor: 'gray' },
		cards: { modified: false, fontColor: 'gray' }
	}
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.keys = Object.keys(this.personObj);
	}

	btnPersonInfor(title) {
		if (this.styleObj[title].modified) {
			this.navCtrl.push(ModifiedPersonInPage, { title: title });
		}
	}
}