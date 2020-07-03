import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10Container10Component } from './lib10-container10/lib10-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib10SharedModule} from '../lib10-shared/lib10-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib10Container10Component
  }
];

@NgModule({
  declarations: [Lib10Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib10SharedModule
  ]
})
export class Lib10Container10Module { }
