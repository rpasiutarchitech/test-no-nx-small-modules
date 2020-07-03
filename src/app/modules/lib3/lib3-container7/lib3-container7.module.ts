import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Container7Component } from './lib3-container7/lib3-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib3SharedModule} from '../lib3-shared/lib3-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib3Container7Component
  }
];

@NgModule({
  declarations: [Lib3Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib3SharedModule
  ]
})
export class Lib3Container7Module { }
