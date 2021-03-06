import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25Container2Component } from './lib25-container2/lib25-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib25Container2Component
  }
];

@NgModule({
  declarations: [Lib25Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib25Container2Module { }
