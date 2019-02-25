import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found.routing';

export const notFoundComponents = [
  NotFoundComponent
];

export const notFoundProviders = [];

@NgModule({
  imports:      [
    CommonModule,
    NotFoundRoutingModule
  ],
  providers:    notFoundProviders,
  declarations: notFoundComponents
})
export class NotFoundModule {}
