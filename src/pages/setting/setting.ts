import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AboutPage } from './about/about';
import { MultiLanguagePage } from './multi-language/multi-language'

@Component({
  templateUrl: 'setting.html'
})
export class SettingPage {
    title: any;
    childPage = {
        aboutPage : { title: '关于', page: AboutPage },
        multiLanguage : { title: '多语言', page: MultiLanguagePage }
    }
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.title = navParams.data.title;
    }
    navPush(target) {
        this.navCtrl.push(target.page, { title: target.title });
    }
}