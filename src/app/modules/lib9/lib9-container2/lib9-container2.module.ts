import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9Container2Component } from './lib9-container2/lib9-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib9Container2Component
  }
];

@NgModule({
  declarations: [Lib9Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib9Container2Module { }
