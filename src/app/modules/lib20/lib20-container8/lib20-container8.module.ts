import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20Container8Component } from './lib20-container8/lib20-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib20SharedModule} from '../lib20-shared/lib20-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib20Container8Component
  }
];

@NgModule({
  declarations: [Lib20Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib20SharedModule
  ]
})
export class Lib20Container8Module { }
