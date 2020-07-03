import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29Container2Component } from './lib29-container2/lib29-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib29Container2Component
  }
];

@NgModule({
  declarations: [Lib29Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib29Container2Module { }
