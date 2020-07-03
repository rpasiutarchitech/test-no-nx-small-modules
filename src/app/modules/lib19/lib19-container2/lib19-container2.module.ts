import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19Container2Component } from './lib19-container2/lib19-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib19Container2Component
  }
];

@NgModule({
  declarations: [Lib19Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib19Container2Module { }
