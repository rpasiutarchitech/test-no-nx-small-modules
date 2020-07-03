import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21Container7Component } from './lib21-container7/lib21-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib21SharedModule} from '../lib21-shared/lib21-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib21Container7Component
  }
];

@NgModule({
  declarations: [Lib21Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib21SharedModule
  ]
})
export class Lib21Container7Module { }
