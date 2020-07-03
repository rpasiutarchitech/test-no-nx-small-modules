import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6Container9Component } from './lib6-container9/lib6-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib6SharedModule} from '../lib6-shared/lib6-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib6Container9Component
  }
];

@NgModule({
  declarations: [Lib6Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib6SharedModule
  ]
})
export class Lib6Container9Module { }
