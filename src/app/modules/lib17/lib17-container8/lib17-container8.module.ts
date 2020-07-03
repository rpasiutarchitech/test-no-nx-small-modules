import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17Container8Component } from './lib17-container8/lib17-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib17SharedModule} from '../lib17-shared/lib17-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib17Container8Component
  }
];

@NgModule({
  declarations: [Lib17Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib17SharedModule
  ]
})
export class Lib17Container8Module { }
