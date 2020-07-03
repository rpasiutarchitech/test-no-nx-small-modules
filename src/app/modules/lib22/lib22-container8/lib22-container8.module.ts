import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22Container8Component } from './lib22-container8/lib22-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib22SharedModule} from '../lib22-shared/lib22-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib22Container8Component
  }
];

@NgModule({
  declarations: [Lib22Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib22SharedModule
  ]
})
export class Lib22Container8Module { }
