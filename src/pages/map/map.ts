import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Shop page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shop',
  templateUrl: 'map.html'
})
export class MapPage {
	public map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  loadMap() {
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 8,
      center: [116.39,39.9]
    });
	}
    ionViewDidLoad() {
    this.loadMap();
  }
}
