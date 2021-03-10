import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wdk-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderMenuComponent {
  @Input()
  title!: string;
  constructor() {}
}
