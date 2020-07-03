import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22Container6Component } from './lib22-container6/lib22-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib22SharedModule} from '../lib22-shared/lib22-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib22Container6Component
  }
];

@NgModule({
  declarations: [Lib22Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib22SharedModule
  ]
})
export class Lib22Container6Module { }
