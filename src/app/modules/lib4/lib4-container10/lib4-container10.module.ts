import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4Container10Component } from './lib4-container10/lib4-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib4SharedModule} from '../lib4-shared/lib4-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib4Container10Component
  }
];

@NgModule({
  declarations: [Lib4Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib4SharedModule
  ]
})
export class Lib4Container10Module { }
