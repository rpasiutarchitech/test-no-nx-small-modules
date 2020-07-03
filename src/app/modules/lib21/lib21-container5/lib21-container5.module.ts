import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21Container5Component } from './lib21-container5/lib21-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib21Container5Component
  }
];

@NgModule({
  declarations: [Lib21Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib21Container5Module { }
