import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20Container10Component } from './lib20-container10/lib20-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib20SharedModule} from '../lib20-shared/lib20-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib20Container10Component
  }
];

@NgModule({
  declarations: [Lib20Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib20SharedModule
  ]
})
export class Lib20Container10Module { }
