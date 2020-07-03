import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19Container7Component } from './lib19-container7/lib19-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib19SharedModule} from '../lib19-shared/lib19-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib19Container7Component
  }
];

@NgModule({
  declarations: [Lib19Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib19SharedModule
  ]
})
export class Lib19Container7Module { }
