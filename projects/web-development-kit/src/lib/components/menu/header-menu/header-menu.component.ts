import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DomPortal } from '@angular/cdk/portal';
@Component({
  selector: 'wdk-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderMenuComponent {
  @Input()
  title!: string;
  @Input()
  set icon(html: HTMLElement) {
    this.iconPortal = new DomPortal(html);
  }
  iconPortal!: DomPortal<HTMLElement>;
  constructor() {}
}
