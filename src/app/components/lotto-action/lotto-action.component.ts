import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lotto-action',
  templateUrl: './lotto-action.component.html',
})
export class LottoActionComponent implements OnInit {
  @Input() text: String = '';
  @Input() onClick: Function = (): void => {};
  constructor() {}

  ngOnInit(): void {}
}
