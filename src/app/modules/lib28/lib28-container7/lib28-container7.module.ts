import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28Container7Component } from './lib28-container7/lib28-container7.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib28SharedModule} from '../lib28-shared/lib28-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib28Container7Component
  }
];

@NgModule({
  declarations: [Lib28Container7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib28SharedModule
  ]
})
export class Lib28Container7Module { }
