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
    asset_code: '1234',
    brand:   '',
    model:   '',
    serial:  '',
    status:  '',
    purchase_date: '',
    warranty_date: '',
    warranty: '',
    remark:  '',
  }
  
  isSubmitted = false
  ngOnInit(): void {
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate([''])
  }

  ngSubmit(registrationForm:NgForm){
    console.log(this.registerData)
    if(registrationForm.valid){
      this.isSubmitted = true
      alert("success")
      this.service.createNotebook(this.registerData).subscribe(data=>{
        if(data.resultCode !== 40900){
          alert("success");
          console.log("data")
        }
      })
    }else{
      alert("fail")
    }
    
  }
}
