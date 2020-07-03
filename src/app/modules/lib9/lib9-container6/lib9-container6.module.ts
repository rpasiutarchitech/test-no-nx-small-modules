import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9Container6Component } from './lib9-container6/lib9-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib9SharedModule} from '../lib9-shared/lib9-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib9Container6Component
  }
];

@NgModule({
  declarations: [Lib9Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib9SharedModule
  ]
})
export class Lib9Container6Module { }
