import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8Container9Component } from './lib8-container9/lib8-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib8SharedModule} from '../lib8-shared/lib8-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib8Container9Component
  }
];

@NgModule({
  declarations: [Lib8Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib8SharedModule
  ]
})
export class Lib8Container9Module { }
