import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6Container8Component } from './lib6-container8/lib6-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib6SharedModule} from '../lib6-shared/lib6-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib6Container8Component
  }
];

@NgModule({
  declarations: [Lib6Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib6SharedModule
  ]
})
export class Lib6Container8Module { }
