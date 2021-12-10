import { Component, OnInit } from '@angular/core';
import { LottoTicketService } from 'src/app/services/lotto-ticket.service';
import { TicketBetService } from 'src/app/services/ticket-bet.service';
import { LottoNumber } from 'src/app/LottoNumber';

@Component({
  selector: 'app-lotto-ticket',
  templateUrl: './lotto-ticket.component.html',
})
export class TicketComponent implements OnInit {
  totalNumbers: number = 20;
  ticketNumbers: LottoNumber[] = [];
  isValidTicket: boolean = false;

  constructor(
    private lottoTicketService: LottoTicketService,
    private ticketBetService: TicketBetService
  ) {}

  ngOnInit(): void {
    // Create empty lottery ticket board
    for (let i = 0; i < this.totalNumbers; i++) {
      this.ticketNumbers.push({ lottoNum: i + 1, isSelected: false });
    }
  }

  ngDoCheck(): void {
    this.isValidTicket =
      this.lottoTicketService.getTotalLottoNumbersSelected() === 5;
  }

  clickLottoNumber(number: LottoNumber) {
    if (!number.isSelected) this.lottoTicketService.selectLottoNumber(number);
    else this.lottoTicketService.deselectLottoNumber(number);
  }

  cashAction(): void {}

  clearAction(): void {
    this.lottoTicketService.clearAllLottoNumbers();
    this.ticketBetService.clearBet();
  }
}
