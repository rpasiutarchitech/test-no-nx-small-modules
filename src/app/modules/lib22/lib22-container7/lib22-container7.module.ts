import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22Container7Component } from './lib22-container7/lib22-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib22SharedModule} from '../lib22-shared/lib22-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib22Container7Component
  }
];

@NgModule({
  declarations: [Lib22Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib22SharedModule
  ]
})
export class Lib22Container7Module { }
