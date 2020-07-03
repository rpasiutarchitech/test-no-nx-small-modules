import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2Container6Component } from './lib2-container6/lib2-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib2SharedModule} from '../lib2-shared/lib2-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib2Container6Component
  }
];

@NgModule({
  declarations: [Lib2Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib2SharedModule
  ]
})
export class Lib2Container6Module { }
