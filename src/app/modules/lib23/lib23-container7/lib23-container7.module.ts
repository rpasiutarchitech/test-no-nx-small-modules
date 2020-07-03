import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23Container7Component } from './lib23-container7/lib23-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib23SharedModule} from '../lib23-shared/lib23-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib23Container7Component
  }
];

@NgModule({
  declarations: [Lib23Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib23SharedModule
  ]
})
export class Lib23Container7Module { }
