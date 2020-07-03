import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25Container9Component } from './lib25-container9/lib25-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib25SharedModule} from '../lib25-shared/lib25-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib25Container9Component
  }
];

@NgModule({
  declarations: [Lib25Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib25SharedModule
  ]
})
export class Lib25Container9Module { }
