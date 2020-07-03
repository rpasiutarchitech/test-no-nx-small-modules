import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22Container2Component } from './lib22-container2/lib22-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib22Container2Component
  }
];

@NgModule({
  declarations: [Lib22Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib22Container2Module { }
