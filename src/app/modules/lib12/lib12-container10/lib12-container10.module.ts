import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12Container10Component } from './lib12-container10/lib12-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib12SharedModule} from '../lib12-shared/lib12-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib12Container10Component
  }
];

@NgModule({
  declarations: [Lib12Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib12SharedModule
  ]
})
export class Lib12Container10Module { }
