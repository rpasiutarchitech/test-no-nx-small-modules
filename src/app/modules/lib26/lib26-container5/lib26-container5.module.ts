import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26Container5Component } from './lib26-container5/lib26-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib26Container5Component
  }
];

@NgModule({
  declarations: [Lib26Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib26Container5Module { }
