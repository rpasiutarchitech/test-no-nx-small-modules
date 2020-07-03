import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publishablelib1Container2Component } from './publishablelib1-container2/publishablelib1-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Publishablelib1Container2Component
  }
];

@NgModule({
  declarations: [Publishablelib1Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Publishablelib1Container2Module { }
