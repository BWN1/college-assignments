import { Component, OnInit } from '@angular/core';
import { LottoNumber } from 'src/app/interfaces/LottoNumber';
import { LottoTicketService } from 'src/app/services/lotto-ticket.service';
import { TicketBetService } from 'src/app/services/ticket-bet.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  ticketNumbers: LottoNumber[] = [
    { number: 1, isSelected: true },
    { number: 1, isSelected: true },
    { number: 1, isSelected: true },
    { number: 1, isSelected: true },
    { number: 1, isSelected: true },
  ];
  totalBet: number = 100;

  constructor(
    private lottoTicketService: LottoTicketService,
    private ticketBetService: TicketBetService
  ) {}

  ngOnInit(): void {
    this.ticketNumbers = this.lottoTicketService.getLottoNumbers();
    this.totalBet = this.ticketBetService.getBet();
  }
}
