import { Component, OnInit } from '@angular/core';
import { TicketBetService } from 'src/app/services/ticket-bet.service';
import { CashModalService } from 'src/app/services/cash-modal.service';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
})
export class ConfirmButtonComponent implements OnInit {
  totalBet: number = 0;
  isDisabled: boolean = false;
  constructor(
    private ticketBetService: TicketBetService,
    private cashModalService: CashModalService
  ) {}

  ngOnInit(): void {
    this.totalBet = this.ticketBetService.getBet();
  }

  ngDoCheck(): void {
    this.isDisabled =
      this.totalBet === 0 || this.cashModalService.getChange() === 0;
  }
}
