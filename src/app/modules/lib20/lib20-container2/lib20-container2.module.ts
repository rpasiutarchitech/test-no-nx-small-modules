import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20Container2Component } from './lib20-container2/lib20-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib20Container2Component
  }
];

@NgModule({
  declarations: [Lib20Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib20Container2Module { }
