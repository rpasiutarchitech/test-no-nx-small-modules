import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publishablelib1Container4Component } from './publishablelib1-container4/publishablelib1-container4.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatLineModule} from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: Publishablelib1Container4Component
  }
];

@NgModule({
  declarations: [Publishablelib1Container4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatLineModule
  ]
})
export class Publishablelib1Container4Module { }
