import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8Container10Component } from './lib8-container10/lib8-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib8SharedModule} from '../lib8-shared/lib8-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib8Container10Component
  }
];

@NgModule({
  declarations: [Lib8Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib8SharedModule
  ]
})
export class Lib8Container10Module { }
