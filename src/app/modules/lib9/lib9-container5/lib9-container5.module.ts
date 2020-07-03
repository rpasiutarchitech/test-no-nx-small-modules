import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9Container5Component } from './lib9-container5/lib9-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib9Container5Component
  }
];

@NgModule({
  declarations: [Lib9Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib9Container5Module { }
