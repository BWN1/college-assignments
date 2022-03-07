import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bet-amount',
  templateUrl: './bet-amount.component.html',
})
export class BetAmountComponent implements OnInit {
  @Input() amount: number = 0;
  @Output() raiseBet: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  betAmount(amount: number): void {
    this.raiseBet.emit(amount);
  }
}
