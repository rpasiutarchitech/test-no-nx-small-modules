import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5Container10Component } from './lib5-container10/lib5-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib5SharedModule} from '../lib5-shared/lib5-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib5Container10Component
  }
];

@NgModule({
  declarations: [Lib5Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib5SharedModule
  ]
})
export class Lib5Container10Module { }
