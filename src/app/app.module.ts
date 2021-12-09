import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TicketComponent } from './components/lotto-ticket/lotto-ticket.component';
import { LottoNumberComponent } from './components/lotto-number/lotto-number.component';
import { LottoActionComponent } from './components/lotto-action/lotto-action.component';
import { BetAmountComponent } from './components/bet-amount/bet-amount.component';
import { BetSectionComponent } from './components/bet-section/bet-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketComponent,
    LottoNumberComponent,
    LottoActionComponent,
    BetAmountComponent,
    BetSectionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
