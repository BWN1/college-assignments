import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bet-amount',
  templateUrl: './bet-amount.component.html',
})
export class BetAmountComponent implements OnInit {
  @Input() amount: number = 0;
  constructor() {}

  ngOnInit(): void {}

  betAmount(amount: number): void {}
}
