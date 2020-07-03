import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25Container7Component } from './lib25-container7/lib25-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib25SharedModule} from '../lib25-shared/lib25-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib25Container7Component
  }
];

@NgModule({
  declarations: [Lib25Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib25SharedModule
  ]
})
export class Lib25Container7Module { }
