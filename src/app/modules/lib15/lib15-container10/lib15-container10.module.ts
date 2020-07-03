import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15Container10Component } from './lib15-container10/lib15-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib15SharedModule} from '../lib15-shared/lib15-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib15Container10Component
  }
];

@NgModule({
  declarations: [Lib15Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib15SharedModule
  ]
})
export class Lib15Container10Module { }
