import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ButtonModule } from '../button/button.module';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [HeaderMenuComponent],
  imports: [CommonModule, ButtonModule, PortalModule],
  exports: [HeaderMenuComponent],
})
export class MenuModule {}
