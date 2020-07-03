import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2Container9Component } from './lib2-container9/lib2-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib2SharedModule} from '../lib2-shared/lib2-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib2Container9Component
  }
];

@NgModule({
  declarations: [Lib2Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib2SharedModule
  ]
})
export class Lib2Container9Module { }
