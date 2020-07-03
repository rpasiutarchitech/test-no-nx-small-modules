import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13Container6Component } from './lib13-container6/lib13-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib13SharedModule} from '../lib13-shared/lib13-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib13Container6Component
  }
];

@NgModule({
  declarations: [Lib13Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib13SharedModule
  ]
})
export class Lib13Container6Module { }
