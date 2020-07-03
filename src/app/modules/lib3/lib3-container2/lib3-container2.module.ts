import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Container2Component } from './lib3-container2/lib3-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib3Container2Component
  }
];

@NgModule({
  declarations: [Lib3Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib3Container2Module { }
