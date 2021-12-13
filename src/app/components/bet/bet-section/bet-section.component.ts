import { Component, OnInit } from '@angular/core';
import { TicketBetService } from 'src/app/services/ticket-bet.service';

@Component({
  selector: 'app-bet-section',
  templateUrl: './bet-section.component.html',
})
export class BetSectionComponent implements OnInit {
  betAmounts: number[] = [1, 5, 10, 20];
  totalBet: number = 0;

  constructor(private ticketBetService: TicketBetService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.totalBet = this.ticketBetService.getBet();
  }

  raiseBet(amount: number): void {
    this.ticketBetService.increaseBet(amount);
  }
}
