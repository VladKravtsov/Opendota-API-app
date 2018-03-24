import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    {path: '/heroes', label: 'Heroes'},
    {path: '/matches', label: 'Matches'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
