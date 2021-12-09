import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lotto-number',
  templateUrl: './lotto-number.component.html',
})
export class LottoNumberComponent implements OnInit {
  @Input() ticketNumber: number = 0;
  isSelected: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.isSelected = !this.isSelected;
  }
}
