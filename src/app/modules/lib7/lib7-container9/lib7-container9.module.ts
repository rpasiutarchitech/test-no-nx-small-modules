import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7Container9Component } from './lib7-container9/lib7-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib7SharedModule} from '../lib7-shared/lib7-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib7Container9Component
  }
];

@NgModule({
  declarations: [Lib7Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib7SharedModule
  ]
})
export class Lib7Container9Module { }
