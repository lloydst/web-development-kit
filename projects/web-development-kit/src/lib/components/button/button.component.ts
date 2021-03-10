import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wdk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input()
  label: string | undefined;

  constructor() {}
}
