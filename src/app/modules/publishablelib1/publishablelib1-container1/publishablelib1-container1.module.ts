import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publishablelib1Container1Component } from './publishablelib1-container1/publishablelib1-container1.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Publishablelib1Container1Component
  }
];

@NgModule({
  declarations: [Publishablelib1Container1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    SharedLibModule
  ]
})
export class Publishablelib1Container1Module { }
