import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27Container7Component } from './lib27-container7/lib27-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib27SharedModule} from '../lib27-shared/lib27-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib27Container7Component
  }
];

@NgModule({
  declarations: [Lib27Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib27SharedModule
  ]
})
export class Lib27Container7Module { }
