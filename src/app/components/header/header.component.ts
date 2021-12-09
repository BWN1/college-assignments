import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title: string = 'WHE WHE on D’ Avenue';
  constructor() {}

  ngOnInit(): void {}
}
