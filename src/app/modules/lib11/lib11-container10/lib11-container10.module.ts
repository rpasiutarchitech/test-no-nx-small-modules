import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11Container10Component } from './lib11-container10/lib11-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib11SharedModule} from '../lib11-shared/lib11-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib11Container10Component
  }
];

@NgModule({
  declarations: [Lib11Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib11SharedModule
  ]
})
export class Lib11Container10Module { }
