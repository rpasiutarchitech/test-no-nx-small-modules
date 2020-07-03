import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29Container5Component } from './lib29-container5/lib29-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib29Container5Component
  }
];

@NgModule({
  declarations: [Lib29Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib29Container5Module { }
