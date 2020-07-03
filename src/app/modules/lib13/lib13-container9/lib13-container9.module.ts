import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13Container9Component } from './lib13-container9/lib13-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib13SharedModule} from '../lib13-shared/lib13-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib13Container9Component
  }
];

@NgModule({
  declarations: [Lib13Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib13SharedModule
  ]
})
export class Lib13Container9Module { }
