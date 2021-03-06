import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11Container2Component } from './lib11-container2/lib11-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib11Container2Component
  }
];

@NgModule({
  declarations: [Lib11Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib11Container2Module { }
