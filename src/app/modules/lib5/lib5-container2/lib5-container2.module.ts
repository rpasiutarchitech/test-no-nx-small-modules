import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5Container2Component } from './lib5-container2/lib5-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib5Container2Component
  }
];

@NgModule({
  declarations: [Lib5Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib5Container2Module { }
