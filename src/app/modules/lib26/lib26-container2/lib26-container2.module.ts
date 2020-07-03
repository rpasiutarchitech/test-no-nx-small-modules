import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26Container2Component } from './lib26-container2/lib26-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib26Container2Component
  }
];

@NgModule({
  declarations: [Lib26Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib26Container2Module { }
