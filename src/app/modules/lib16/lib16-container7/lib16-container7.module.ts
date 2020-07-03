import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16Container7Component } from './lib16-container7/lib16-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib16SharedModule} from '../lib16-shared/lib16-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib16Container7Component
  }
];

@NgModule({
  declarations: [Lib16Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib16SharedModule
  ]
})
export class Lib16Container7Module { }
