import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Container6Component } from './lib3-container6/lib3-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib3SharedModule} from '../lib3-shared/lib3-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib3Container6Component
  }
];

@NgModule({
  declarations: [Lib3Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib3SharedModule
  ]
})
export class Lib3Container6Module { }
