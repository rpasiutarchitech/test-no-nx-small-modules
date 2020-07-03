import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16Container2Component } from './lib16-container2/lib16-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib16Container2Component
  }
];

@NgModule({
  declarations: [Lib16Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib16Container2Module { }
