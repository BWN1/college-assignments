import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
})
export class ClearButtonComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() clearAction: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clearAction.emit();
  }
}
