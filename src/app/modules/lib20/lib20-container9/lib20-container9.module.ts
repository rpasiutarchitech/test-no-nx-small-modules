import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20Container9Component } from './lib20-container9/lib20-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib20SharedModule} from '../lib20-shared/lib20-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib20Container9Component
  }
];

@NgModule({
  declarations: [Lib20Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib20SharedModule
  ]
})
export class Lib20Container9Module { }
