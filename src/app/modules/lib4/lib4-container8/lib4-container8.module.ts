import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4Container8Component } from './lib4-container8/lib4-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib4SharedModule} from '../lib4-shared/lib4-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib4Container8Component
  }
];

@NgModule({
  declarations: [Lib4Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib4SharedModule
  ]
})
export class Lib4Container8Module { }
