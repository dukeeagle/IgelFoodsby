import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: Http) {
    console.log('Hello JsonProvider Provider');
  }


  public getJSONDataAsync(filePath: string) : Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(filePath)
          .subscribe(
            res => {
              if (!res.ok) {
                reject("Failed with status: " + res.status + "\nTrying to find fil at " + filePath);
              }

              var jsonRes = res.json();

              resolve(jsonRes);
            }
          );
      }).catch((reason) => this.handleError(reason));
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
