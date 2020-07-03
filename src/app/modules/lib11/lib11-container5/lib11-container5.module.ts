import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11Container5Component } from './lib11-container5/lib11-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib11Container5Component
  }
];

@NgModule({
  declarations: [Lib11Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib11Container5Module { }
