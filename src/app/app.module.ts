import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketSectionComponent } from './components/ticket/ticket-section/ticket-section.component';
import { LottoNumberComponent } from './components/ticket/lotto-number/lotto-number.component';
import { BetAmountComponent } from './components/bet/bet-amount/bet-amount.component';
import { BetSectionComponent } from './components/bet/bet-section/bet-section.component';
import { TicketInformationSectionComponent } from './components/ticket-information/ticket-information-section/ticket-information-section.component';
import { SelectedNumberComponent } from './components/ticket-information/selected-number/selected-number.component';
import { CashButtonComponent } from './components/ticket/cash-button/cash-button.component';
import { ClearButtonComponent } from './components/ticket/clear-button/clear-button.component';
import { CashModalComponent } from './components/cash-modal/cash-modal/cash-modal.component';
import { ConfirmButtonComponent } from './components/cash-modal/confirm-button/confirm-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentSectionComponent } from './components/cash-modal/payment-section/payment-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketSectionComponent,
    LottoNumberComponent,
    BetAmountComponent,
    BetSectionComponent,
    TicketInformationSectionComponent,
    SelectedNumberComponent,
    CashButtonComponent,
    ClearButtonComponent,
    CashModalComponent,
    ConfirmButtonComponent,
    PaymentSectionComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
