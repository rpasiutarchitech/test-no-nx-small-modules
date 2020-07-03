import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10Container8Component } from './lib10-container8/lib10-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib10SharedModule} from '../lib10-shared/lib10-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib10Container8Component
  }
];

@NgModule({
  declarations: [Lib10Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib10SharedModule
  ]
})
export class Lib10Container8Module { }
