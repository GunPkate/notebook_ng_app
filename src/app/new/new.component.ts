import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickSearch(): void {
    this.router.navigate(['search'])
  }

  onClickNew(): void{
    this.router.navigate(['edit'])
  }
}
