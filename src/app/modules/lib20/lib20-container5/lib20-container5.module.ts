import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20Container5Component } from './lib20-container5/lib20-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib20Container5Component
  }
];

@NgModule({
  declarations: [Lib20Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib20Container5Module { }
