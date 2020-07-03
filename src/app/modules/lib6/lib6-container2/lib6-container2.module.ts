import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib6Container2Component } from './lib6-container2/lib6-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib6Container2Component
  }
];

@NgModule({
  declarations: [Lib6Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib6Container2Module { }
