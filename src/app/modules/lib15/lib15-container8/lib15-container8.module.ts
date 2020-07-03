import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15Container8Component } from './lib15-container8/lib15-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib15SharedModule} from '../lib15-shared/lib15-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib15Container8Component
  }
];

@NgModule({
  declarations: [Lib15Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib15SharedModule
  ]
})
export class Lib15Container8Module { }
