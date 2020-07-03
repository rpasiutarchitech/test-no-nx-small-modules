import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10Container2Component } from './lib10-container2/lib10-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib10Container2Component
  }
];

@NgModule({
  declarations: [Lib10Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib10Container2Module { }
