import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20Container7Component } from './lib20-container7/lib20-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib20SharedModule} from '../lib20-shared/lib20-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib20Container7Component
  }
];

@NgModule({
  declarations: [Lib20Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib20SharedModule
  ]
})
export class Lib20Container7Module { }
