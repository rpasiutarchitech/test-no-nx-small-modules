import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13Container5Component } from './lib13-container5/lib13-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib13Container5Component
  }
];

@NgModule({
  declarations: [Lib13Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib13Container5Module { }
