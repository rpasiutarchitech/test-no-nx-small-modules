import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5Container5Component } from './lib5-container5/lib5-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib5Container5Component
  }
];

@NgModule({
  declarations: [Lib5Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib5Container5Module { }
