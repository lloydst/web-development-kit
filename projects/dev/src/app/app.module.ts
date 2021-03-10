import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  ComponentsModule,
  MenuModule,
  ButtonModule,
} from 'web-development-kit';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    MenuModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
