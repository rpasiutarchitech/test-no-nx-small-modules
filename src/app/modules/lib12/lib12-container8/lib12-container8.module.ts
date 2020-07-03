import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12Container8Component } from './lib12-container8/lib12-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib12SharedModule} from '../lib12-shared/lib12-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib12Container8Component
  }
];

@NgModule({
  declarations: [Lib12Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib12SharedModule
  ]
})
export class Lib12Container8Module { }
