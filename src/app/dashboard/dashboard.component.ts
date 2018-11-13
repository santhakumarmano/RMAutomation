import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidenavWidth = 4;
  constructor() { }

  ngOnInit() {
  }
  increase(){
    this.sidenavWidth = 15;
  }
  decrease(){
    this.sidenavWidth = 4;
  }
}
