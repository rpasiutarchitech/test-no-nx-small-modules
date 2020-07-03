import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13Container2Component } from './lib13-container2/lib13-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib13Container2Component
  }
];

@NgModule({
  declarations: [Lib13Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib13Container2Module { }
