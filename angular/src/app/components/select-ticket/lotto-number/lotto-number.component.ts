import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LottoNumber } from 'src/app/interfaces/LottoNumber';

@Component({
  selector: 'app-lotto-number',
  templateUrl: './lotto-number.component.html',
})
export class LottoNumberComponent implements OnInit {
  @Input() ticketNumber: LottoNumber = { number: 0, isSelected: false };
  @Output() clickLottoNumber: EventEmitter<LottoNumber> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickNumber(number: LottoNumber): void {
    this.clickLottoNumber.emit(number);
  }
}
