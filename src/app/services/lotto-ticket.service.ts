import { Injectable } from '@angular/core';
import { LottoNumber } from '../LottoNumber';

@Injectable({
  providedIn: 'root',
})
export class LottoTicketService {
  private selectedNumbers: LottoNumber[] = [];

  constructor() {}

  getLottoNumbers(): LottoNumber[] {
    return this.selectedNumbers;
  }

  getTotalLottoNumbersSelected(): number {
    return this.selectedNumbers.length;
  }

  selectLottoNumber(number: LottoNumber): void {
    if (this.selectedNumbers.length < 5 && !number.isSelected) {
      number.isSelected = true;
      if (number.isSelected) this.selectedNumbers.push(number);
    }
  }

  deselectLottoNumber(number: LottoNumber): void {
    number.isSelected = false;
    this.selectedNumbers = this.selectedNumbers.filter(
      (value: LottoNumber) => value.lottoNum !== number.lottoNum
    );
  }

  clearAllLottoNumbers(): void {
    for (let number of this.selectedNumbers) number.isSelected = false;
    this.selectedNumbers = [];
  }
}
