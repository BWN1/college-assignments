import { Component, OnInit } from '@angular/core';
import { LottoTicketService } from 'src/app/services/lotto-ticket.service';
import { TicketBetService } from 'src/app/services/ticket-bet.service';
import { CashModalService } from 'src/app/services/cash-modal.service';
import { LottoNumber } from 'src/app/interfaces/LottoNumber';

@Component({
  selector: 'app-ticket-section',
  templateUrl: './ticket-section.component.html',
})
export class TicketSectionComponent implements OnInit {
  totalNumbers: number = 20;
  ticketNumbers: LottoNumber[] = [];
  isValidTicket: boolean = false;
  showCashModal: boolean = false;

  constructor(
    private lottoTicketService: LottoTicketService,
    private ticketBetService: TicketBetService,
    private cashModalService: CashModalService
  ) {}

  ngOnInit(): void {
    // Create empty lottery ticket board
    for (let i = 0; i < this.totalNumbers; i++) {
      this.ticketNumbers.push({ number: i + 1, isSelected: false });
    }
  }

  ngDoCheck(): void {
    this.isValidTicket =
      this.lottoTicketService.getTotalLottoNumbersSelected() === 5;
    this.showCashModal = this.cashModalService.getIsModalShown();
  }

  clickLottoNumber(number: LottoNumber) {
    if (!number.isSelected) this.lottoTicketService.selectLottoNumber(number);
    else this.lottoTicketService.deselectLottoNumber(number);
  }

  cashAction(): void {
    this.cashModalService.showModal();
  }

  clearAction(): void {
    this.lottoTicketService.clearAllLottoNumbers();
    this.ticketBetService.clearBet();
  }
}
