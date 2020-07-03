import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22Container5Component } from './lib22-container5/lib22-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib22Container5Component
  }
];

@NgModule({
  declarations: [Lib22Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib22Container5Module { }
