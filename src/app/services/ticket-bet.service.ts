import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketBetService {
  private betAmount: number = 0;

  constructor() {}

  getBet(): Observable<number> {
    return of(this.betAmount);
  }

  increaseBet(amount: number): void {
    this.betAmount += amount;
  }
}
