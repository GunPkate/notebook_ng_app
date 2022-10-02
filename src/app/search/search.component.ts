import { Notebook } from './../models/models';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  notebooks: Notebook[] | undefined =[
    {
      brand:"Dell",
      model:"Inspiron 3515",
      serial:"sn039456",
      status:"active",
      waranty:3,
      asset_code:"202209001",
      purchae_date: "2022-02-09T17:00:00.000+00:00",
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

  name : string = "Dell"
  ngOnInit(): void {
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate(['edit'])
  }
}
