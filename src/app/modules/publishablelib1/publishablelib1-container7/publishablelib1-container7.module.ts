import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publishablelib1Container7Component } from './publishablelib1-container7/publishablelib1-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Publishablelib1SharedModule} from '../publishablelib1-shared/publishablelib1-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Publishablelib1Container7Component
  }
];

@NgModule({
  declarations: [Publishablelib1Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Publishablelib1SharedModule
  ]
})
export class Publishablelib1Container7Module { }
