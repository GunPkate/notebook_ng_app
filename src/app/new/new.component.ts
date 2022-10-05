import { NotebooksService } from './../services/notebooks.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private router: Router,private service:NotebooksService) { }
  
  registerData =  {
    asset_code: '',
    brand:   'ASUS',
    model:   'TUF',
    serial:  'AS21154',
    status:  'Active',
    purchase_date: '',
    warranty_date: '',
    warranty: '3',
    remark:  '',
  }
  
  isSubmitted = false
  ngOnInit(): void {
    const run_id = this.service.getRunnginID().subscribe(data=>{
      if(data.resultCode == 20000){
        this.registerData.asset_code = data.resultData
      }
    })
    console.log(run_id)
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate([''])
  }

  onClickReset(registrationForm:NgForm):void{
    registrationForm.resetForm();
  }

  ngSubmit(registrationForm:NgForm){
    console.log(this.registerData)
    console.log(this.registerData.purchase_date)
    if(registrationForm.valid){
      this.isSubmitted = true
      alert("success")
      this.service.createNotebook(this.registerData).subscribe(data=>{
        if(data.resultCode !== 40900){
          console.log("data")
        }
      })
    }else{
      alert("fail")
    }
  }
}
