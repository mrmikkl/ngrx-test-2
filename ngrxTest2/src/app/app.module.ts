import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppStoreModule } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {}
