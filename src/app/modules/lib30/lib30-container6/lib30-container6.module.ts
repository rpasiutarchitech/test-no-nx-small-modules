import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30Container6Component } from './lib30-container6/lib30-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib30SharedModule} from '../lib30-shared/lib30-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib30Container6Component
  }
];

@NgModule({
  declarations: [Lib30Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib30SharedModule
  ]
})
export class Lib30Container6Module { }
