import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25Container5Component } from './lib25-container5/lib25-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib25Container5Component
  }
];

@NgModule({
  declarations: [Lib25Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib25Container5Module { }
