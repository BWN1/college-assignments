import { Component, OnInit } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TicketBetService } from 'src/app/services/ticket-bet.service';
import { CashModalService } from 'src/app/services/cash-modal.service';

@Component({
  selector: 'app-cash-modal',
  templateUrl: './cash-modal.component.html',
})
export class CashModalComponent implements OnInit {
  faTimes: IconDefinition = faTimes;
  totalBet: number = 0;
  totalReceived: number = 0;
  change: number = 0;

  constructor(
    private ticketBetService: TicketBetService,
    private cashModalService: CashModalService
  ) {}

  ngOnInit(): void {
    this.totalBet = this.ticketBetService.getBet();
  }

  ngDoCheck(): void {
    this.totalReceived = this.cashModalService.getTotalReceived();
    this.cashModalService.calculateChange(this.totalBet);
    this.change = this.cashModalService.getChange();
  }

  closeModal(): void {
    this.cashModalService.hideModal();
  }
}
