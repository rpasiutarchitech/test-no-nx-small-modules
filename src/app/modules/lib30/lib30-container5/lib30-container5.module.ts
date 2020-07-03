import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30Container5Component } from './lib30-container5/lib30-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib30Container5Component
  }
];

@NgModule({
  declarations: [Lib30Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib30Container5Module { }
