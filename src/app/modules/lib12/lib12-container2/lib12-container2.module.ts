import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12Container2Component } from './lib12-container2/lib12-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib12Container2Component
  }
];

@NgModule({
  declarations: [Lib12Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib12Container2Module { }
