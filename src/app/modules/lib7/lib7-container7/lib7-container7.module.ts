import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7Container7Component } from './lib7-container7/lib7-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib7SharedModule} from '../lib7-shared/lib7-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib7Container7Component
  }
];

@NgModule({
  declarations: [Lib7Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib7SharedModule
  ]
})
export class Lib7Container7Module { }
