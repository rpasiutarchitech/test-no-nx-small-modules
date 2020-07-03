import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Container1Component } from './lib3-container1/lib3-container1.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';

const routes: Routes = [
  {
    path: '',
    component: Lib3Container1Component
  }
];

@NgModule({
  declarations: [Lib3Container1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    SharedLibModule
  ]
})
export class Lib3Container1Module { }
