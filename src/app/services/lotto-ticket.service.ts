import { Injectable } from '@angular/core';
import { LottoNumber } from '../interfaces/LottoNumber';

@Injectable({
  providedIn: 'root',
})
export class LottoTicketService {
  private selectedNumbers: LottoNumber[] = [];

  constructor() {}

  private sortSelectedNumbers(): void {
    this.selectedNumbers.sort(
      (num1: LottoNumber, num2: LottoNumber) => num1.number - num2.number
    );
  }

  getLottoNumbers(): LottoNumber[] {
    this.sortSelectedNumbers();
    return this.selectedNumbers;
  }

  getTotalLottoNumbersSelected(): number {
    return this.selectedNumbers.length;
  }

  selectLottoNumber(number: LottoNumber): void {
    this.sortSelectedNumbers();
    if (this.selectedNumbers.length < 5 && !number.isSelected) {
      number.isSelected = true;
      if (number.isSelected) this.selectedNumbers.push(number);
    }
  }

  deselectLottoNumber(number: LottoNumber): void {
    number.isSelected = false;
    this.selectedNumbers = this.selectedNumbers.filter(
      (value: LottoNumber) => value.number !== number.number
    );
  }

  clearAllLottoNumbers(): void {
    for (let number of this.selectedNumbers) number.isSelected = false;
    this.selectedNumbers = [];
  }
}
