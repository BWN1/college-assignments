import { Component, OnInit } from '@angular/core';
import { LottoTicketService } from 'src/app/services/lotto-ticket.service';
import { TicketBetService } from 'src/app/services/ticket-bet.service';
import { LottoNumber } from 'src/app/LottoNumber';

@Component({
  selector: 'app-ticket-information',
  templateUrl: './ticket-information.component.html',
})
export class TicketInformationComponent implements OnInit {
  selectedNums: LottoNumber[] = [];
  totalBet: number = 0;

  constructor(
    private lottoTicketService: LottoTicketService,
    private ticketBetService: TicketBetService
  ) {}

  ngOnInit(): void {}

  ngDoCheck() {
    // Get selected lotto tickets
    this.lottoTicketService.getLottoNumbers().subscribe({
      next: (numbers: LottoNumber[]) => (this.selectedNums = numbers),
    });

    // Get bet amount
    this.ticketBetService.getBet().subscribe({
      next: (bet: number) => (this.totalBet = bet),
    });
  }
}
