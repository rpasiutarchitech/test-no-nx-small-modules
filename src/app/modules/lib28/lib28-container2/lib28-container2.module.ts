import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28Container2Component } from './lib28-container2/lib28-container2.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: Lib28Container2Component
  }
];

@NgModule({
  declarations: [Lib28Container2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatCardModule
  ]
})
export class Lib28Container2Module { }
