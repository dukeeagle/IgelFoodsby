import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dropoffs = [];

  constructor(public navCtrl: NavController, private dataFinder: DataProvider) {
      /*this.jsonRetriever.getData().subscribe((data) => {
        console.log("What's in that data?", data);
        this.myjsondata = data;
      });*/
    //jsonRetriever.testMe();
  }

  ionViewDidLoad(){
    this.dataFinder.getJSONDataAsync("./assets/deliveries-sample.json").then( data => {
      this.SetQueryOptionsData(data);
    });
  }

  SetQueryOptionsData(data : any){
    this.dropoffs = data.dropoffs;
  }

}
