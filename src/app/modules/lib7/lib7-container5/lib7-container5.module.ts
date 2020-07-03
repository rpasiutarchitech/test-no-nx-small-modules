import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7Container5Component } from './lib7-container5/lib7-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib7Container5Component
  }
];

@NgModule({
  declarations: [Lib7Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib7Container5Module { }
