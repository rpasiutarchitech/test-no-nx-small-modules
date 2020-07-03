import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21Container9Component } from './lib21-container9/lib21-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib21SharedModule} from '../lib21-shared/lib21-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib21Container9Component
  }
];

@NgModule({
  declarations: [Lib21Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib21SharedModule
  ]
})
export class Lib21Container9Module { }
