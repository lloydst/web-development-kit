import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [HeaderMenuComponent],
  imports: [CommonModule, ButtonModule],
  exports: [HeaderMenuComponent],
})
export class MenuModule {}
