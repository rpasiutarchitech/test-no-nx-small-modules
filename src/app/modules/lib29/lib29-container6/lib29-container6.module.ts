import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29Container6Component } from './lib29-container6/lib29-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib29SharedModule} from '../lib29-shared/lib29-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib29Container6Component
  }
];

@NgModule({
  declarations: [Lib29Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib29SharedModule
  ]
})
export class Lib29Container6Module { }
