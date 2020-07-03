import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27Container5Component } from './lib27-container5/lib27-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib27Container5Component
  }
];

@NgModule({
  declarations: [Lib27Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib27Container5Module { }
