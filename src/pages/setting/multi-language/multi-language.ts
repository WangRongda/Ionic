import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'multi-language.html'
})
export class MultiLanguagePage {
    title: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.title = navParams.data.title;
    }

}