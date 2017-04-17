import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginSignupPage } from './login-signup/login-signup';
import { PersonInformationPage } from './person-information/person-information';
import { SearchStorePage } from './search-store/search-store'

import { NoticePage } from '../notice/notice';
import { CardRechargePage } from '../card-recharge/card-recharge';
import { MapPage } from '../map/map';

import { StoreDetailPage } from './store-detail/store-detail';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  childPage = {
    cardRechargePage : { title: '充值', page: CardRechargePage },
    noticePage: { title: '公告', page: NoticePage },
    mapPage: { title: '地图', page: MapPage },
    storeDetailPage: { title: '店铺详情', page: StoreDetailPage },
    loginSignup: { page: LoginSignupPage },  // Login/signup or person information page
    personInformation: { page: PersonInformationPage },
    searchStorePage: { page: SearchStorePage }
  }
  position = {
    latitude: 116.39,
    longtitude: 39.9,
    distance: 500
  }
  store = [
    {
      label: "理想咖啡店",
      address: "东兴路228号",
      latitude: "234.22",
      longtitude: "28.2",
      distance: 318,
      averageCost: 8.6,
      phone: '15988152673',
      email: '123899696@qq.com',
      room: false,
      parking: true,
      credit: false,
      operationTime: '9:00 - 18:00',
      picture: "assets/shop1.jpg"
    },
    {
      label: "喜马拉店",
      address: "江南大道783",
      latitude: "23",
      longtitude: "2.2",
      distance: 50,
      averageCost: 5.6,
      phone: '15988152673',
      email: '123899696@qq.com',
      room: false,
      parking: true,
      credit: false,
      operationTime: '9:00 - 18:00',
      picture: "assets/Shop2.jpg"
    }
  ];
  // keys = Object.keys(this.childPage);
  isLogin: false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public storage: Storage) {
     storage.ready().then(() => {

       // set a key/value
      // storage.set('name', 'Max');

       // Or to get a key/value pair
       storage.get('isLogin').then((val) => {
        // console.log('Your age is', val);
        this.isLogin = val;
       });
     });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  
  navPush(target) {
    this.navCtrl.push(target.page, { title: target.title });
  }
  
  btnPerson() {
    if (this.isLogin) {
      this.navCtrl.push(PersonInformationPage);
    }
    else {
      let modal;
      modal = this.modalCtrl.create(LoginSignupPage);
      modal.present();
    }
  }
}
