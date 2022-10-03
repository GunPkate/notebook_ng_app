import { NotebooksService } from './../services/notebooks.service';
import { Notebook } from './../models/models';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  notebooks: Notebook[] | undefined 
  constructor(private router:Router, private service:NotebooksService) { this.notebooks = service.initMockData()}

  name : string = "Dell"
  ngOnInit(): void {
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate([''])
  }

  onClickEdit(notebook: Notebook): void{
    this.router.navigate(['edit'],{state:notebook})
  }
}
