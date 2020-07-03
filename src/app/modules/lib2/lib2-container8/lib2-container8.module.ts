import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2Container8Component } from './lib2-container8/lib2-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib2SharedModule} from '../lib2-shared/lib2-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib2Container8Component
  }
];

@NgModule({
  declarations: [Lib2Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib2SharedModule
  ]
})
export class Lib2Container8Module { }
