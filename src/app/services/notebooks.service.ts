import { Notebook } from '../models/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotebooksService {

  constructor(private http: HttpClient) { }

  notebook: Notebook | undefined;

  getAllNotebooks(): Observable<Notebook>{return this.http.get<any>('http://localhost:300/assets/notebook/getall')}
  initMockData(): Notebook[]{
    return [
      {
        brand:"Dell",
        model:"Inspiron 3515",
        serial:"sn039456",
        status:"active",
        waranty:3,
        asset_code:"202209001",
        purchae_date: "2022-09-09T17:00:00.000+00:00",
        remark:""
      },{
        brand:"Dell2",
        model:"Inspiron 3515",
        serial:"sn039456",
        status:"active",
        waranty:3,
        asset_code:"202209001",
        purchae_date: "2022-02-09T17:00:00.000+00:00",
        remark:""
      }
    ]
  }
}
