import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23Container9Component } from './lib23-container9/lib23-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib23SharedModule} from '../lib23-shared/lib23-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib23Container9Component
  }
];

@NgModule({
  declarations: [Lib23Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib23SharedModule
  ]
})
export class Lib23Container9Module { }
