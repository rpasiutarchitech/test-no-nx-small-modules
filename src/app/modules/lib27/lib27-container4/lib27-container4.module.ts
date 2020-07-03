import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27Container4Component } from './lib27-container4/lib27-container4.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatLineModule} from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: Lib27Container4Component
  }
];

@NgModule({
  declarations: [Lib27Container4Component],
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
export class Lib27Container4Module { }
