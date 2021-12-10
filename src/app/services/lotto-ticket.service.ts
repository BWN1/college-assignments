import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LottoNumber } from '../LottoNumber';

@Injectable({
  providedIn: 'root',
})
export class LottoTicketService {
  private selectedNumbers: LottoNumber[] = [];

  constructor() {}

  getLottoNumbers(): Observable<LottoNumber[]> {
    return of(this.selectedNumbers);
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
}
