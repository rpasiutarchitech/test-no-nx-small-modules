import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29Container9Component } from './lib29-container9/lib29-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib29SharedModule} from '../lib29-shared/lib29-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib29Container9Component
  }
];

@NgModule({
  declarations: [Lib29Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib29SharedModule
  ]
})
export class Lib29Container9Module { }
