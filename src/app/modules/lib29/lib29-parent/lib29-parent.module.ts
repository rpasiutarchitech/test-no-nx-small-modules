import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib29ParentContainerComponent} from './lib29-parent-container/lib29-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib29ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib29-container1/lib29-container1.module').then(m => m.Lib29Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib29-container2/lib29-container2.module').then(m => m.Lib29Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib29-container3/lib29-container3.module').then(m => m.Lib29Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib29-container4/lib29-container4.module').then(m => m.Lib29Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib29-container5/lib29-container5.module').then(m => m.Lib29Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib29-container6/lib29-container6.module').then(m => m.Lib29Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib29-container7/lib29-container7.module').then(m => m.Lib29Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib29-container8/lib29-container8.module').then(m => m.Lib29Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib29-container9/lib29-container9.module').then(m => m.Lib29Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib29-container10/lib29-container10.module').then(m => m.Lib29Container10Module)
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
  declarations: [Lib29ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib29ParentModule { }
