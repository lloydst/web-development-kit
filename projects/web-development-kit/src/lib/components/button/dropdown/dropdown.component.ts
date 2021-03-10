import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wdk-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent {
  isOpen = false;
}
