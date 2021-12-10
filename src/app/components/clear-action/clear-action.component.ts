import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear-action',
  templateUrl: './clear-action.component.html',
})
export class ClearActionComponent implements OnInit {
  @Input() isActive: boolean = false;
  @Output() clearAction: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clearAction.emit();
  }
}
