import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19Container9Component } from './lib19-container9/lib19-container9.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib19SharedModule} from '../lib19-shared/lib19-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib19Container9Component
  }
];

@NgModule({
  declarations: [Lib19Container9Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib19SharedModule
  ]
})
export class Lib19Container9Module { }
