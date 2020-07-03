import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24Container5Component } from './lib24-container5/lib24-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib24Container5Component
  }
];

@NgModule({
  declarations: [Lib24Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib24Container5Module { }
