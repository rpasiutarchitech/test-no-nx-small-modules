import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16Container5Component } from './lib16-container5/lib16-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib16Container5Component
  }
];

@NgModule({
  declarations: [Lib16Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib16Container5Module { }
