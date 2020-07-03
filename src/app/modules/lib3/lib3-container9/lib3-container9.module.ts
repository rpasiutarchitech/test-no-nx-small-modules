import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Container9Component } from './lib3-container9/lib3-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib3SharedModule} from '../lib3-shared/lib3-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib3Container9Component
  }
];

@NgModule({
  declarations: [Lib3Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib3SharedModule
  ]
})
export class Lib3Container9Module { }
