import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib30ParentContainerComponent} from './lib30-parent-container/lib30-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib30ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib30-container1/lib30-container1.module').then(m => m.Lib30Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib30-container2/lib30-container2.module').then(m => m.Lib30Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib30-container3/lib30-container3.module').then(m => m.Lib30Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib30-container4/lib30-container4.module').then(m => m.Lib30Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib30-container5/lib30-container5.module').then(m => m.Lib30Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib30-container6/lib30-container6.module').then(m => m.Lib30Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib30-container7/lib30-container7.module').then(m => m.Lib30Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib30-container8/lib30-container8.module').then(m => m.Lib30Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib30-container9/lib30-container9.module').then(m => m.Lib30Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib30-container10/lib30-container10.module').then(m => m.Lib30Container10Module)
      },
      {
        path: '',
        redirectTo: 'container1',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'container1'
      }
    ]
  }
];

@NgModule({
  declarations: [Lib30ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib30ParentModule { }
