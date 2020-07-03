import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25Container6Component } from './lib25-container6/lib25-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib25SharedModule} from '../lib25-shared/lib25-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib25Container6Component
  }
];

@NgModule({
  declarations: [Lib25Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib25SharedModule
  ]
})
export class Lib25Container6Module { }
