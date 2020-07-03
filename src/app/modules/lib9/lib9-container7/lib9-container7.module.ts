import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9Container7Component } from './lib9-container7/lib9-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib9SharedModule} from '../lib9-shared/lib9-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib9Container7Component
  }
];

@NgModule({
  declarations: [Lib9Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib9SharedModule
  ]
})
export class Lib9Container7Module { }
