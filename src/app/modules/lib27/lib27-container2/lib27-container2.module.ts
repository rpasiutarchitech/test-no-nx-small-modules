import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27Container2Component } from './lib27-container2/lib27-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib27Container2Component
  }
];

@NgModule({
  declarations: [Lib27Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib27Container2Module { }
