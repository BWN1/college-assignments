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
    const decimalExists: boolean = this.totalReceived.indexOf('.') !== -1;
    const totalDecimals: number = decimalExists
      ? this.totalReceived.substr(this.totalReceived.indexOf('.') + 1).length
      : 0;

    if (digit === '.' && this.totalReceived.indexOf('.') < 0) {
      this.totalReceived += digit;
    } else if (this.totalReceived === '0') {
      this.totalReceived = digit;
    } else if (
      this.totalReceived !== '0' &&
      digit !== '.' &&
      totalDecimals < 2
    ) {
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
    const changeAsNum = Number(parseFloat(this.totalReceived).toFixed(2));
    this.change = changeAsNum >= bet && bet !== 0 ? changeAsNum - bet : 0;
  }

  getChange(): number {
    return Number(this.change.toFixed(2));
  }
}
