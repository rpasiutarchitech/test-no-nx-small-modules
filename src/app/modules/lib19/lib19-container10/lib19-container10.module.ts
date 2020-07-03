import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19Container10Component } from './lib19-container10/lib19-container10.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib19SharedModule} from '../lib19-shared/lib19-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib19Container10Component
  }
];

@NgModule({
  declarations: [Lib19Container10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib19SharedModule
  ]
})
export class Lib19Container10Module { }
