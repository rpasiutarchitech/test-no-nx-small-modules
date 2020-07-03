import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14Container2Component } from './lib14-container2/lib14-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib14Container2Component
  }
];

@NgModule({
  declarations: [Lib14Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib14Container2Module { }
