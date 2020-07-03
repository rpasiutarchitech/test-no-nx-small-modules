import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publishablelib1Container10Component } from './publishablelib1-container10/publishablelib1-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Publishablelib1SharedModule} from '../publishablelib1-shared/publishablelib1-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Publishablelib1Container10Component
  }
];

@NgModule({
  declarations: [Publishablelib1Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Publishablelib1SharedModule
  ]
})
export class Publishablelib1Container10Module { }
