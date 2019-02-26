import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppStoreModule } from './store/app.store.module';

export const coreGuards = [];

export const coreInterceptors = [];

export const coreProviders = [];

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    AppStoreModule
  ],
  providers:    coreProviders,
  declarations: [
    ...coreGuards,
    ...coreInterceptors
  ]
})
export class CoreModule {}
