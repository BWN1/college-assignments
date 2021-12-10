import { Component, OnInit } from '@angular/core';
import { faBackspace, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CashModalService } from 'src/app/services/cash-modal.service';

@Component({
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
})
export class PaymentSectionComponent implements OnInit {
  faBackspace: IconDefinition = faBackspace;
  numPad: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

  constructor(private cashModalService: CashModalService) {}

  ngOnInit(): void {}

  addDigit(digit: string) {
    this.cashModalService.addDigit(digit);
  }

  removeDigit(): void {
    this.cashModalService.removeDigit();
  }
}
