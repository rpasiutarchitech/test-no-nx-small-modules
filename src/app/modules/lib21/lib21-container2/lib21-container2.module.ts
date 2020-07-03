import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21Container2Component } from './lib21-container2/lib21-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib21Container2Component
  }
];

@NgModule({
  declarations: [Lib21Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib21Container2Module { }
