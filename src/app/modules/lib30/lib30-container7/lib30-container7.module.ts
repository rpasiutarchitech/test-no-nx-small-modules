import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30Container7Component } from './lib30-container7/lib30-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib30SharedModule} from '../lib30-shared/lib30-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib30Container7Component
  }
];

@NgModule({
  declarations: [Lib30Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib30SharedModule
  ]
})
export class Lib30Container7Module { }
