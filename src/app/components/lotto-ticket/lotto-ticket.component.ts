import { Component, OnInit } from '@angular/core';
import { LottoTicketService } from 'src/app/services/lotto-ticket.service';
import { LottoNumber } from 'src/app/LottoNumber';

@Component({
  selector: 'app-lotto-ticket',
  templateUrl: './lotto-ticket.component.html',
})
export class TicketComponent implements OnInit {
  totalNumbers: number = 20;
  ticketNumbers: LottoNumber[] = [];
  cashAction: Function = (): void => {};
  clearAction: Function = (): void => {};

  constructor(private lottoTicketService: LottoTicketService) {}

  ngOnInit(): void {
    // Create empty lottery ticket board
    for (let i = 0; i < this.totalNumbers; i++) {
      this.ticketNumbers.push({ lottoNum: i + 1, isSelected: false });
    }
  }

  clickLottoNumber(number: LottoNumber) {
    if (!number.isSelected) this.lottoTicketService.selectLottoNumber(number);
    else this.lottoTicketService.deselectLottoNumber(number);
  }
}
