import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
@NgModule({
  declarations: [ButtonComponent, DropdownComponent],
  imports: [CommonModule, OverlayModule],
  exports: [ButtonComponent, DropdownComponent],
})
export class ButtonModule {}
