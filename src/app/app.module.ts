import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketComponent } from './components/lotto-ticket/lotto-ticket.component';
import { LottoNumberComponent } from './components/lotto-number/lotto-number.component';
import { LottoActionComponent } from './components/lotto-action/lotto-action.component';
import { BetAmountComponent } from './components/bet-amount/bet-amount.component';
import { BetSectionComponent } from './components/bet-section/bet-section.component';
import { TicketInformationComponent } from './components/ticket-information/ticket-information.component';
import { SelectedNumberComponent } from './components/selected-number/selected-number.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketComponent,
    LottoNumberComponent,
    LottoActionComponent,
    BetAmountComponent,
    BetSectionComponent,
    TicketInformationComponent,
    SelectedNumberComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
