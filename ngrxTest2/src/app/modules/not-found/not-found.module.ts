import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const notFoundComponents = [
  NotFoundComponent
];

export const notFoundProviders = [];

@NgModule({
  imports:      [
    CommonModule
  ],
  providers:    notFoundProviders,
  declarations: notFoundComponents
})
export class NotFoundModule {}
