import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28Container5Component } from './lib28-container5/lib28-container5.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: Lib28Container5Component
  }
];

@NgModule({
  declarations: [Lib28Container5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatTabsModule
  ]
})
export class Lib28Container5Module { }
