import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15Container3Component } from './lib15-container3/lib15-container3.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [
  {
    path: '',
    component: Lib15Container3Component
  }
];

@NgModule({
  declarations: [Lib15Container3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedLibModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class Lib15Container3Module { }
