import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7Container8Component } from './lib7-container8/lib7-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib7SharedModule} from '../lib7-shared/lib7-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib7Container8Component
  }
];

@NgModule({
  declarations: [Lib7Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib7SharedModule
  ]
})
export class Lib7Container8Module { }
