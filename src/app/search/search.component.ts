import { NotebooksService } from './../services/notebooks.service';
import { Notebook } from './../models/models';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  registerData =  {
    brand:   'ASUS',
    model:   'TUF',
    serial:  'AS21154',
    status:  'Active',
  }

  notebooks: Notebook[] = []
  constructor(private router:Router, private service:NotebooksService) { }


  ngOnInit(): void {
    // this.notebooks = this.service.initMockData()
    try {
      this.service.getAllNotebook().subscribe((data)=>{
        console.log(data)
        if(data.resultCode == 20000){
          console.log("Success")
          for (const asset_data of data.resultData){
            this.notebooks.push(asset_data)
          }
        }
      })
    } catch (error) {
      console.log(error)
    }
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

  onClickEdit(notebook: Notebook): void{
    this.router.navigate(['edit'],{state:notebook})
  }

  onClickDelete(selected: string): void{
    this.service.deleteNotebook(selected).subscribe((data)=>{
      console.log(data.resultCode);
      if(data.resultCode === 20000) window.location.reload()
    });
  }

  ngSubmit(registrationForm:NgForm){
    
  }
}
