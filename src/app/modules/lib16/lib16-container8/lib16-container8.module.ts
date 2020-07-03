import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16Container8Component } from './lib16-container8/lib16-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib16SharedModule} from '../lib16-shared/lib16-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib16Container8Component
  }
];

@NgModule({
  declarations: [Lib16Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib16SharedModule
  ]
})
export class Lib16Container8Module { }
