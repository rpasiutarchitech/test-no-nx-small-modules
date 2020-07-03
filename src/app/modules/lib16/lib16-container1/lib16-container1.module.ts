import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16Container1Component } from './lib16-container1/lib16-container1.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib16Container1Component
  }
];

@NgModule({
  declarations: [Lib16Container1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    SharedLibModule
  ]
})
export class Lib16Container1Module { }
