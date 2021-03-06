import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21Container6Component } from './lib21-container6/lib21-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib21SharedModule} from '../lib21-shared/lib21-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib21Container6Component
  }
];

@NgModule({
  declarations: [Lib21Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib21SharedModule
  ]
})
export class Lib21Container6Module { }
