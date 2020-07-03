import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16Container6Component } from './lib16-container6/lib16-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib16SharedModule} from '../lib16-shared/lib16-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib16Container6Component
  }
];

@NgModule({
  declarations: [Lib16Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib16SharedModule
  ]
})
export class Lib16Container6Module { }
