import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2Container2Component } from './lib2-container2/lib2-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib2Container2Component
  }
];

@NgModule({
  declarations: [Lib2Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib2Container2Module { }
