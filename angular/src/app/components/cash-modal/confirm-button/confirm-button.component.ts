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
    const totalReceived: string = this.cashModalService.getTotalReceived();
    const totalReceivedAsNumber: number = Number(totalReceived);
    const totalDecimals: number = totalReceived.substr(
      totalReceived.indexOf('.') + 1
    ).length;

    this.isDisabled =
      this.totalBet === 0 ||
      totalReceivedAsNumber === 0 ||
      (totalReceived.indexOf('.') !== -1 && totalDecimals < 2) ||
      totalReceivedAsNumber < this.totalBet;
  }
}
