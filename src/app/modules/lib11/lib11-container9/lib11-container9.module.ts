import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11Container9Component } from './lib11-container9/lib11-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib11SharedModule} from '../lib11-shared/lib11-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib11Container9Component
  }
];

@NgModule({
  declarations: [Lib11Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib11SharedModule
  ]
})
export class Lib11Container9Module { }
