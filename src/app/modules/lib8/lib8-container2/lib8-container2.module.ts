import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8Container2Component } from './lib8-container2/lib8-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib8Container2Component
  }
];

@NgModule({
  declarations: [Lib8Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib8Container2Module { }
