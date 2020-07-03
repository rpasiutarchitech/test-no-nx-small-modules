import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15Container5Component } from './lib15-container5/lib15-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib15Container5Component
  }
];

@NgModule({
  declarations: [Lib15Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib15Container5Module { }
