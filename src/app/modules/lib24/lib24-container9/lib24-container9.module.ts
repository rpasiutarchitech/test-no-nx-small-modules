import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24Container9Component } from './lib24-container9/lib24-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib24SharedModule} from '../lib24-shared/lib24-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib24Container9Component
  }
];

@NgModule({
  declarations: [Lib24Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib24SharedModule
  ]
})
export class Lib24Container9Module { }
