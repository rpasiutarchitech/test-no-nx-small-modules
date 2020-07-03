import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23Container5Component } from './lib23-container5/lib23-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib23Container5Component
  }
];

@NgModule({
  declarations: [Lib23Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib23Container5Module { }
