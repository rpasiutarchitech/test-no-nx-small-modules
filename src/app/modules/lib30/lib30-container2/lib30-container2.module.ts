import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30Container2Component } from './lib30-container2/lib30-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib30Container2Component
  }
];

@NgModule({
  declarations: [Lib30Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib30Container2Module { }
