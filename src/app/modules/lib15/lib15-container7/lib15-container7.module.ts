import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15Container7Component } from './lib15-container7/lib15-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib15SharedModule} from '../lib15-shared/lib15-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib15Container7Component
  }
];

@NgModule({
  declarations: [Lib15Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib15SharedModule
  ]
})
export class Lib15Container7Module { }
