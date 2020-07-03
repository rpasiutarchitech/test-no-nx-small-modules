import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7Container2Component } from './lib7-container2/lib7-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib7Container2Component
  }
];

@NgModule({
  declarations: [Lib7Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib7Container2Module { }
