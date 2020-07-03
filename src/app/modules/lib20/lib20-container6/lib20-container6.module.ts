import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20Container6Component } from './lib20-container6/lib20-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib20SharedModule} from '../lib20-shared/lib20-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib20Container6Component
  }
];

@NgModule({
  declarations: [Lib20Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib20SharedModule
  ]
})
export class Lib20Container6Module { }
