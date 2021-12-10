import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cash-button',
  templateUrl: './cash-button.component.html',
})
export class CashButtonComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() cashAction: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.cashAction.emit();
  }
}
