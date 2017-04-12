import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	templateUrl: 'modified-person-information.html'
})

export class ModifiedPersonInPage {
	title: any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.title = navParams.data.title;
	}
	btnSave() {
		this.navCtrl.pop();
	}
}