import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CashModalService {
  private totalReceived: string = '0';
  private isModalShown: boolean = false;
  private change: number = 0;

  constructor() {}

  showModal() {
    this.isModalShown = true;
  }

  hideModal() {
    this.isModalShown = false;
  }

  getIsModalShown(): boolean {
    return this.isModalShown;
  }

  getTotalReceived(): string {
    return this.totalReceived;
  }

  addDigit(digit: string): void {
    if (this.totalReceived === '0' && digit !== '0') {
      if (digit === '.') this.totalReceived += digit;
      else this.totalReceived = digit;
    } else if (this.totalReceived !== '0') {
      this.totalReceived += digit;
    }
  }

  removeDigit(): void {
    if (this.totalReceived.length === 1) {
      this.totalReceived = '0';
    } else {
      this.totalReceived = this.totalReceived.substr(
        0,
        this.totalReceived.length - 1
      );
    }
  }

  calculateChange(bet: number): void {
    this.change =
      parseFloat(this.totalReceived) >= bet && bet !== 0
        ? parseFloat(this.totalReceived) - bet
        : 0;
  }

  getChange(): number {
    return this.change;
  }
}
