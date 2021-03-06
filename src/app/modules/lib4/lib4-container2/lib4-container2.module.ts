import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4Container2Component } from './lib4-container2/lib4-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib4Container2Component
  }
];

@NgModule({
  declarations: [Lib4Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib4Container2Module { }
