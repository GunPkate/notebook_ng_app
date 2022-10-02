import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Notebook } from '../models/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  notebook: Notebook | undefined

  ngOnInit(): void {
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate(['edit'])
  }
}
