import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16Container9Component } from './lib16-container9/lib16-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib16SharedModule} from '../lib16-shared/lib16-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib16Container9Component
  }
];

@NgModule({
  declarations: [Lib16Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib16SharedModule
  ]
})
export class Lib16Container9Module { }
