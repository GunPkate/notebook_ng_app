import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Notebook } from '../models/models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  data: any
  remain_m: number|0 = 0
  remain_y: number|0 = 0
  today: Date = new Date(Date.now()) 

  constructor(private router:Router) { 
    const nav = this.router.getCurrentNavigation()
    console.log(nav)
    this.data = nav?.extras.state;
  }

  ngOnInit(): void {
    console.log(this.data)
    const war_date = Date.parse(this.data.purchae_date)
    const pass_day = Math.floor((Date.now()-war_date)/ (1000*60*60*24))
    const warant = +(this.data.waranty)*365
    // console.log(Date.now())
    // console.log(war_date)
    this.remain_y = Math.floor((warant-pass_day)/365);
    this.remain_m = Math.floor(((warant-pass_day)%365)/365*12);
  //   console.log(warant-pass_day)
  //   console.log(this.remain_m,this.remain_d,)
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate([''])
  }
}
