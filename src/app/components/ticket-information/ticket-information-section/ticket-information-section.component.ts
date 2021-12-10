import { Component, OnInit } from '@angular/core';
import { LottoTicketService } from 'src/app/services/lotto-ticket.service';
import { TicketBetService } from 'src/app/services/ticket-bet.service';
import { LottoNumber } from 'src/app/interfaces/LottoNumber';

@Component({
  selector: 'app-ticket-information-section',
  templateUrl: './ticket-information-section.component.html',
})
export class TicketInformationSectionComponent implements OnInit {
  selectedNums: LottoNumber[] = [];
  totalBet: number = 0;

  constructor(
    private lottoTicketService: LottoTicketService,
    private ticketBetService: TicketBetService
  ) {}

  ngOnInit(): void {}

  ngDoCheck() {
    // Get selected lotto tickets
    this.selectedNums = this.lottoTicketService.getLottoNumbers();

    // Get bet amount
    this.totalBet = this.ticketBetService.getBet();
  }
}
