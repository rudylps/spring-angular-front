import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

import { Granny } from './granny';

const BASE_API_URL = 'http://localhost:8080/grannys';

@Injectable()
export class GrannyService {

  private grannySubject = new Subject<Granny[]>();
  grannys : Observable<Granny[]>;

  constructor(private httpclient: HttpClient) {
    this.grannys = this.grannySubject.asObservable();

    this.httpclient
    .get<Granny[]>(BASE_API_URL)
    .subscribe( response => {
      this.grannySubject.next(response);
    });
  }

  public saveGranny (granny: Granny) {

    this.httpclient.post( BASE_API_URL, [granny], {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe( response => {
      console.log(response);
    });

    // ECRITURE NON BUGFIX DU POST
    // this.httpclient.post( BASE_API_URL, granny)
    // .subscribe( response => {
    //   console.log(response);
    // });

  }

}
