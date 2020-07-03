import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25Container8Component } from './lib25-container8/lib25-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib25SharedModule} from '../lib25-shared/lib25-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib25Container8Component
  }
];

@NgModule({
  declarations: [Lib25Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib25SharedModule
  ]
})
export class Lib25Container8Module { }
