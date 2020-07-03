import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publishablelib1Container6Component } from './publishablelib1-container6/publishablelib1-container6.component';
import {RouterModule, Routes} from '@angular/router';
import {Publishablelib1SharedModule} from '../publishablelib1-shared/publishablelib1-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Publishablelib1Container6Component
  }
];

@NgModule({
  declarations: [Publishablelib1Container6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Publishablelib1SharedModule
  ]
})
export class Publishablelib1Container6Module { }
