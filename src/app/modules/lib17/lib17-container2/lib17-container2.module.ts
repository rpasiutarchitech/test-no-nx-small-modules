import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17Container2Component } from './lib17-container2/lib17-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib17Container2Component
  }
];

@NgModule({
  declarations: [Lib17Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib17Container2Module { }
