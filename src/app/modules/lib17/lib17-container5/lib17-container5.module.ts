import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17Container5Component } from './lib17-container5/lib17-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib17Container5Component
  }
];

@NgModule({
  declarations: [Lib17Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib17Container5Module { }
