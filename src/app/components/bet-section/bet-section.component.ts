import { Component, OnInit } from '@angular/core';
import { TicketBetService } from 'src/app/services/ticket-bet.service';

@Component({
  selector: 'app-bet-section',
  templateUrl: './bet-section.component.html',
})
export class BetSectionComponent implements OnInit {
  betAmounts: number[] = [1, 5, 10, 20];

  constructor(private ticketBetService: TicketBetService) {}

  ngOnInit(): void {}

  raiseBet(amount: number): void {
    this.ticketBetService.increaseBet(amount);
  }
}
