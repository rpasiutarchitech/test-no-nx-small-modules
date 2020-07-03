import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10Container6Component } from './lib10-container6/lib10-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib10SharedModule} from '../lib10-shared/lib10-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib10Container6Component
  }
];

@NgModule({
  declarations: [Lib10Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib10SharedModule
  ]
})
export class Lib10Container6Module { }
