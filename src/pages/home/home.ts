import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dropoffs = null;
  choice = 0;

  constructor(public navCtrl: NavController, private dataFinder: DataProvider) {
  }

  ionViewDidLoad(){
    this.dataFinder.getJSON("./assets/deliveries-sample.json").then( data => {
      this.SetQueryOptionsData(data);
    });
  }

  SetQueryOptionsData(data : any){
    this.dropoffs = data;
  }

  setChoice(newChoice){
    this.choice = newChoice;
  }

}
