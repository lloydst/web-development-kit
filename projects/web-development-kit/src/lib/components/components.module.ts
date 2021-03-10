import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MenuModule, ButtonModule],
  exports: [],
})
export class ComponentsModule {}
