import { NotebooksService } from './../services/notebooks.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Notebook } from '../models/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  notebook_data: any
  registerData =  {
    asset_code: '',
    brand:   '',
    model:   '',
    serial:  '',
    status:  '',
    purchase_date: '',
    warranty_date: '',
    warranty: '',
    remark:  '',
  }
  code = 0
  remain_m: number|0 = 0
  remain_y: number|0 = 0
  today: Date = new Date(Date.now()) 
  isSubmitted: boolean = false 

  constructor(private router:Router,private service:NotebooksService) { 
    const nav = this.router.getCurrentNavigation()
          this.notebook_data = nav?.extras.state; //data binding at html
      if(this.notebook_data !==undefined||null){
      this.calWarrant(this.notebook_data.purchase_date,this.notebook_data.warranty)
      }
  }

  ngOnInit(): void { 
    this.registerData =  {
      asset_code: this.notebook_data.asset_code,
      brand:   this.notebook_data.brand,
      model:   this.notebook_data.model,
      serial:  this.notebook_data.serial,
      status:  this.notebook_data.status,
      purchase_date: this.notebook_data.purchase_date,
      warranty_date: this.notebook_data.warranty_date,
      warranty: this.notebook_data.warranty,
      remark:  this.notebook_data.remark,
    }
    this.code = this.notebook_data.asset_code
    
    
  }

  calWarrant(purchase_date:string,warranty:Number){
    const war_date = Date.parse(purchase_date)
    const pass_day = Math.floor((Date.now()-war_date)/ (1000*60*60*24))
    const warrant = (+warranty)*365
    console.log(Date.now())
    console.log(war_date)
    this.remain_y = Math.floor((warrant-pass_day)/365);
    this.remain_m = Math.floor(((warrant-pass_day)%365)/365*12);
    console.log(warrant-pass_day)
    console.log(this.remain_y,this.remain_m,)
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate([''])
  }

  onClickReset(registrationForm:NgForm):void{
    registrationForm.value.asset_code = this.code;
    registrationForm.resetForm();
  }

  ngSubmit(registrationForm: NgForm) : void{
    this.isSubmitted = true;
    console.log(registrationForm)
    console.log(this.registerData )
    if(registrationForm.invalid) {
      alert('Register fail');
      return 
    }
    else {
      this.service.updateNotebook(this.registerData).subscribe(data=>{
        if(data.resultCode !== 40900){
          alert('Register Success');
        }
        console.log(data)
      })
    }
  }
}
