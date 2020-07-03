import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28Container8Component } from './lib28-container8/lib28-container8.component';
import {RouterModule, Routes} from '@angular/router';
import {Lib28SharedModule} from '../lib28-shared/lib28-shared.module';

const routes: Routes = [
  {
    path: '',
    component: Lib28Container8Component
  }
];

@NgModule({
  declarations: [Lib28Container8Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Lib28SharedModule
  ]
})
export class Lib28Container8Module { }
