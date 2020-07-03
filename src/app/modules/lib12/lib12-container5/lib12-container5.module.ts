import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12Container5Component } from './lib12-container5/lib12-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib12Container5Component
  }
];

@NgModule({
  declarations: [Lib12Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib12Container5Module { }
