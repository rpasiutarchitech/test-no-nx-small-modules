import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22Container3Component } from './lib22-container3/lib22-container3.component';
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
    component: Lib22Container3Component
  }
];

@NgModule({
  declarations: [Lib22Container3Component],
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
export class Lib22Container3Module { }
