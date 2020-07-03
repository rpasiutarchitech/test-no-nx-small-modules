import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11Container8Component } from './lib11-container8/lib11-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib11SharedModule} from '../lib11-shared/lib11-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib11Container8Component
  }
];

@NgModule({
  declarations: [Lib11Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib11SharedModule
  ]
})
export class Lib11Container8Module { }
