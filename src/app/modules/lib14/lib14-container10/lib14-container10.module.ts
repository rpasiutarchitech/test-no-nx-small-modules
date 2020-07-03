import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14Container10Component } from './lib14-container10/lib14-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib14SharedModule} from '../lib14-shared/lib14-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib14Container10Component
  }
];

@NgModule({
  declarations: [Lib14Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib14SharedModule
  ]
})
export class Lib14Container10Module { }
