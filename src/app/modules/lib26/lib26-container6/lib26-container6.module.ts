import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26Container6Component } from './lib26-container6/lib26-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib26SharedModule} from '../lib26-shared/lib26-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib26Container6Component
  }
];

@NgModule({
  declarations: [Lib26Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib26SharedModule
  ]
})
export class Lib26Container6Module { }
