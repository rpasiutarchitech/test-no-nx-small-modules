import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8Container8Component } from './lib8-container8/lib8-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib8SharedModule} from '../lib8-shared/lib8-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib8Container8Component
  }
];

@NgModule({
  declarations: [Lib8Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib8SharedModule
  ]
})
export class Lib8Container8Module { }
