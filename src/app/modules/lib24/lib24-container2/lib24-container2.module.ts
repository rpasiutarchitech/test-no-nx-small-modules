import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24Container2Component } from './lib24-container2/lib24-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib24Container2Component
  }
];

@NgModule({
  declarations: [Lib24Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib24Container2Module { }
