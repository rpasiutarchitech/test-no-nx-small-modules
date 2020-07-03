import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17Container9Component } from './lib17-container9/lib17-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib17SharedModule} from '../lib17-shared/lib17-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib17Container9Component
  }
];

@NgModule({
  declarations: [Lib17Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib17SharedModule
  ]
})
export class Lib17Container9Module { }
