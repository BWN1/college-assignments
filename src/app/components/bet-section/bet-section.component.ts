import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-section',
  templateUrl: './bet-section.component.html',
})
export class BetSectionComponent implements OnInit {
  betAmounts: number[] = [1, 5, 10, 20];
  constructor() {}

  ngOnInit(): void {}
}
