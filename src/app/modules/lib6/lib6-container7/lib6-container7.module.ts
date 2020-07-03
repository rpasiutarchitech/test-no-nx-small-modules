import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6Container7Component } from './lib6-container7/lib6-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib6SharedModule} from '../lib6-shared/lib6-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib6Container7Component
  }
];

@NgModule({
  declarations: [Lib6Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib6SharedModule
  ]
})
export class Lib6Container7Module { }
