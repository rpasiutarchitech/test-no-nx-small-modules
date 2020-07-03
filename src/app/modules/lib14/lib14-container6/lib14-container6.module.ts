import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14Container6Component } from './lib14-container6/lib14-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib14SharedModule} from '../lib14-shared/lib14-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib14Container6Component
  }
];

@NgModule({
  declarations: [Lib14Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib14SharedModule
  ]
})
export class Lib14Container6Module { }
