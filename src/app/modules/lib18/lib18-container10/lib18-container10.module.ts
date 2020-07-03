import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18Container10Component } from './lib18-container10/lib18-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib18SharedModule} from '../lib18-shared/lib18-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib18Container10Component
  }
];

@NgModule({
  declarations: [Lib18Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib18SharedModule
  ]
})
export class Lib18Container10Module { }
