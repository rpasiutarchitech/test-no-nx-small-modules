import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12Container6Component } from './lib12-container6/lib12-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib12SharedModule} from '../lib12-shared/lib12-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib12Container6Component
  }
];

@NgModule({
  declarations: [Lib12Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib12SharedModule
  ]
})
export class Lib12Container6Module { }
