import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main'
import { ShopPage } from '../shop/shop'
import { NoticePage } from '../notice/notice'
import { PersonPage } from '../person/person'

/*
  Generated class for the Basic tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html'
})
export class BasicPage {

  tab1Root: any = MainPage;
  tab2Root: any = ShopPage;
  tab3Root: any = NoticePage;
  tab4Root: any = PersonPage;

  constructor(public navCtrl: NavController) {

  }

}