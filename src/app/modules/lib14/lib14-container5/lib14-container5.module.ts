import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14Container5Component } from './lib14-container5/lib14-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib14Container5Component
  }
];

@NgModule({
  declarations: [Lib14Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib14Container5Module { }
