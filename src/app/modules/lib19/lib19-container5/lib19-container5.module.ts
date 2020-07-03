import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19Container5Component } from './lib19-container5/lib19-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib19Container5Component
  }
];

@NgModule({
  declarations: [Lib19Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib19Container5Module { }
