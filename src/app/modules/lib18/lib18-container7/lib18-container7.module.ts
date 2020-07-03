import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18Container7Component } from './lib18-container7/lib18-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib18SharedModule} from '../lib18-shared/lib18-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib18Container7Component
  }
];

@NgModule({
  declarations: [Lib18Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib18SharedModule
  ]
})
export class Lib18Container7Module { }
