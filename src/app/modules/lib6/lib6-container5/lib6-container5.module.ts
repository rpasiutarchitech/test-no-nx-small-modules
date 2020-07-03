import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6Container5Component } from './lib6-container5/lib6-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib6Container5Component
  }
];

@NgModule({
  declarations: [Lib6Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib6Container5Module { }
