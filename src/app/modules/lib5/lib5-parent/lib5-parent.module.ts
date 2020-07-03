import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib5ParentContainerComponent} from './lib5-parent-container/lib5-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib5ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib5-container1/lib5-container1.module').then(m => m.Lib5Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib5-container2/lib5-container2.module').then(m => m.Lib5Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib5-container3/lib5-container3.module').then(m => m.Lib5Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib5-container4/lib5-container4.module').then(m => m.Lib5Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib5-container5/lib5-container5.module').then(m => m.Lib5Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib5-container6/lib5-container6.module').then(m => m.Lib5Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib5-container7/lib5-container7.module').then(m => m.Lib5Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib5-container8/lib5-container8.module').then(m => m.Lib5Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib5-container9/lib5-container9.module').then(m => m.Lib5Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib5-container10/lib5-container10.module').then(m => m.Lib5Container10Module)
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
  declarations: [Lib5ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib5ParentModule { }
