import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publishablelib1SharedComponent1Component } from './publishablelib1-shared-component1/publishablelib1-shared-component1.component';
import {SharedLibModule} from '../../shared/shared-lib/shared-lib.module';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [Publishablelib1SharedComponent1Component],
  imports: [
    CommonModule,
    SharedLibModule,

    MatIconModule, MatDividerModule, MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule
  ],
  exports: [Publishablelib1SharedComponent1Component]
})
export class Publishablelib1SharedModule { }
