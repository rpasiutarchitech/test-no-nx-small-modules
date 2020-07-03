import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18Container5Component } from './lib18-container5/lib18-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib18Container5Component
  }
];

@NgModule({
  declarations: [Lib18Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib18Container5Module { }
