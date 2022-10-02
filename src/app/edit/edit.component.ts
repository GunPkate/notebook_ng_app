import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate(['edit'])
  }
}
