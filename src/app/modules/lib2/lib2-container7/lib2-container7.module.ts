import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2Container7Component } from './lib2-container7/lib2-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib2SharedModule} from '../lib2-shared/lib2-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib2Container7Component
  }
];

@NgModule({
  declarations: [Lib2Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib2SharedModule
  ]
})
export class Lib2Container7Module { }
