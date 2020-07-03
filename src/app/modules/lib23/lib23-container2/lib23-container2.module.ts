import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23Container2Component } from './lib23-container2/lib23-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib23Container2Component
  }
];

@NgModule({
  declarations: [Lib23Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib23Container2Module { }
