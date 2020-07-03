import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15Container2Component } from './lib15-container2/lib15-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib15Container2Component
  }
];

@NgModule({
  declarations: [Lib15Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib15Container2Module { }
