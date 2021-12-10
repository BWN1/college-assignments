import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketBetService {
  private betAmount: number = 0;

  constructor() {}

  getBet(): number {
    return this.betAmount;
  }

  increaseBet(amount: number): void {
    this.betAmount += amount;
  }

  clearBet(): void {
    this.betAmount = 0;
  }
}
