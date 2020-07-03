import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publishablelib1Container5Component } from './publishablelib1-container5/publishablelib1-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Publishablelib1Container5Component
  }
];

@NgModule({
  declarations: [Publishablelib1Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Publishablelib1Container5Module { }
