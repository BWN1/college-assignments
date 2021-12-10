import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cash-action',
  templateUrl: './cash-action.component.html',
})
export class CashActionComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() cashAction: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.cashAction.emit();
  }
}
