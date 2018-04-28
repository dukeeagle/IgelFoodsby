import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataProvider {

  constructor(public http: Http) {
    console.log('Hello JsonProvider Provider');
  }

  public getJSON(filePath: string) : Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(filePath)
          .subscribe(
            res => {
              if (!res.ok) {
                reject("Failed: " + res.status + "\nTrying to find" + filePath);
              }
              var jsonRes = res.json().dropoffs;
              resolve(jsonRes);
            }
          );
      })
    }
}
