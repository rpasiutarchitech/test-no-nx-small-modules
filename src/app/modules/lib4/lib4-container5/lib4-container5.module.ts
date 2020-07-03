import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4Container5Component } from './lib4-container5/lib4-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib4Container5Component
  }
];

@NgModule({
  declarations: [Lib4Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib4Container5Module { }
