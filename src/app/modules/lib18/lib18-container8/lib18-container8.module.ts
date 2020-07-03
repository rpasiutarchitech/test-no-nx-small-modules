import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18Container8Component } from './lib18-container8/lib18-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib18SharedModule} from '../lib18-shared/lib18-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib18Container8Component
  }
];

@NgModule({
  declarations: [Lib18Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib18SharedModule
  ]
})
export class Lib18Container8Module { }
