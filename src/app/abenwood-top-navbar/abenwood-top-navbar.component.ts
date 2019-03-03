import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abenwood-top-navbar',
  templateUrl: './abenwood-top-navbar.component.html',
  styleUrls: ['./abenwood-top-navbar.component.scss']
})
export class AbenwoodTopNavbarComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

}
