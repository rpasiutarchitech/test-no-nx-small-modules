import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1Container2Component } from './lib1-container2/lib1-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib1Container2Component
  }
];

@NgModule({
  declarations: [Lib1Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib1Container2Module { }
