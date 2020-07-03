import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7Container6Component } from './lib7-container6/lib7-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib7SharedModule} from '../lib7-shared/lib7-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib7Container6Component
  }
];

@NgModule({
  declarations: [Lib7Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib7SharedModule
  ]
})
export class Lib7Container6Module { }
