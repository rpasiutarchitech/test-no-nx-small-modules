import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Container10Component } from './lib3-container10/lib3-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib3SharedModule} from '../lib3-shared/lib3-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib3Container10Component
  }
];

@NgModule({
  declarations: [Lib3Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib3SharedModule
  ]
})
export class Lib3Container10Module { }
