import { RequestNotebook } from './../models/models';
import { Notebook } from '../models/models';
import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotebooksService {

  notebook: Notebook[] | undefined;

  constructor(private http:HttpClient) {
    // this.notebook = this.initMockData();
  }
  getAllNotebook(): Observable<RequestNotebook>{
    return this.http.get<RequestNotebook>('http://localhost:300/assets/notebook/getall')
  }

  updateNotebook(registerData:any): Observable<RequestNotebook>{
    const body = {
        asset_code: registerData.asset_code,
        brand:   registerData.brand,
        model:   registerData.model,
        serial:  registerData.serial,
        status:  registerData.status,
        warranty: registerData.warranty,
        remark:  registerData.remark,
    }
    return this.http.put<RequestNotebook>('http://localhost:300/assets/notebook/update',body)
  }

  initMockData(): Notebook[]{
    return [
      {
        brand:"Dell",
        model:"Inspiron 3515",
        serial:"sn039456",
        status:"active",
        warranty:3,
        asset_code:"202209001",
        purchase_date: "2022-09-09T17:00:00.000+00:00",
        remark:""
      },{
        brand:"Dell2",
        model:"Inspiron 3515",
        serial:"sn039456",
        status:"active",
        warranty:3,
        asset_code:"202209001",
        purchase_date: "2022-02-09T17:00:00.000+00:00",
        remark:""
      }
    ]
  }
}
