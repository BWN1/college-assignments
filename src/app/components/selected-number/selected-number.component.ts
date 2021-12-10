import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-number',
  templateUrl: './selected-number.component.html',
})
export class SelectedNumberComponent implements OnInit {
  @Input() number: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
