import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotto-ticket',
  templateUrl: './lotto-ticket.component.html',
})
export class TicketComponent implements OnInit {
  totalTicketNumbers: number[] = new Array(20);
  cashAction: Function = (): void => {
    console.log('cash');
  };
  clearAction: Function = (): void => {
    console.log('clear');
  };

  constructor() {}

  ngOnInit(): void {}
}
