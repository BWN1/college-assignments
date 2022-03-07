import { Component, OnInit } from '@angular/core';
import { LottoNumber } from 'src/app/interfaces/LottoNumber';
import { LottoTicketService } from 'src/app/services/lotto-ticket.service';
import { TicketBetService } from 'src/app/services/ticket-bet.service';

@Component({
  selector: 'app-created-ticket',
  templateUrl: './created-ticket.component.html',
})
export class CreatedTicketComponent implements OnInit {
  ticketNumbers: LottoNumber[] = [];
  totalBet: number = 0;

  constructor(
    private lottoTicketService: LottoTicketService,
    private ticketBetService: TicketBetService
  ) {}

  ngOnInit(): void {
    this.ticketNumbers = this.lottoTicketService.getLottoNumbers();
    this.totalBet = this.ticketBetService.getBet();
  }
}
