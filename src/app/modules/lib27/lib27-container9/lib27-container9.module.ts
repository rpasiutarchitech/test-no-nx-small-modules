import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27Container9Component } from './lib27-container9/lib27-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib27SharedModule} from '../lib27-shared/lib27-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib27Container9Component
  }
];

@NgModule({
  declarations: [Lib27Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib27SharedModule
  ]
})
export class Lib27Container9Module { }
