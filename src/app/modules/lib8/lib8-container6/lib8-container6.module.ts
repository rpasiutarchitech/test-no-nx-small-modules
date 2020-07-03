import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8Container6Component } from './lib8-container6/lib8-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib8SharedModule} from '../lib8-shared/lib8-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib8Container6Component
  }
];

@NgModule({
  declarations: [Lib8Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib8SharedModule
  ]
})
export class Lib8Container6Module { }
