import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1Container5Component } from './lib1-container5/lib1-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib1Container5Component
  }
];

@NgModule({
  declarations: [Lib1Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib1Container5Module { }
