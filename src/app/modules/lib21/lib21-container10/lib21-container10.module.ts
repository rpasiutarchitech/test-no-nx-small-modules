import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21Container10Component } from './lib21-container10/lib21-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib21SharedModule} from '../lib21-shared/lib21-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib21Container10Component
  }
];

@NgModule({
  declarations: [Lib21Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib21SharedModule
  ]
})
export class Lib21Container10Module { }
