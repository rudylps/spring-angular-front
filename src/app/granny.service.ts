import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Granny } from './granny';

const BASE_API_URL = 'http://localhost:8080/grannys'

@Injectable()
export class GrannyService {

  private grannySubject = new Subject<Granny[]>();
  grannys : Observable<Granny[]>;

  constructor(private http: HttpClient) {
    this.grannys = this.grannySubject.asObservable();

    this.http
    .get<Granny[]>(BASE_API_URL)
    .subscribe( response => {
      this.grannySubject.next(response);
    });
  }

  saveGranny (granny) {
    console.log(granny);
    this.http
    .post(BASE_API_URL, granny)
    .subscribe( response => {
      console.log(response);
    })
  }

}
