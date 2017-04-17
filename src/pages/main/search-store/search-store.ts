import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'search-store.html'
})
export class SearchStorePage {
    @ViewChild('search') searchBar;

    ionViewDidEnter() {
        setTimeout(()=>{
            this.searchBar.setFocus();
        }, 150);
    }
}