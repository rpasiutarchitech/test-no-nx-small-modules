import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17Container10Component } from './lib17-container10/lib17-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib17SharedModule} from '../lib17-shared/lib17-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib17Container10Component
  }
];

@NgModule({
  declarations: [Lib17Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib17SharedModule
  ]
})
export class Lib17Container10Module { }
