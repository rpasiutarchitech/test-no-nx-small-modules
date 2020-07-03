import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2Container5Component } from './lib2-container5/lib2-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib2Container5Component
  }
];

@NgModule({
  declarations: [Lib2Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib2Container5Module { }
