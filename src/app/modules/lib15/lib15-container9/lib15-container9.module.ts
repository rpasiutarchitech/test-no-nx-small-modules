import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15Container9Component } from './lib15-container9/lib15-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib15SharedModule} from '../lib15-shared/lib15-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib15Container9Component
  }
];

@NgModule({
  declarations: [Lib15Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib15SharedModule
  ]
})
export class Lib15Container9Module { }
