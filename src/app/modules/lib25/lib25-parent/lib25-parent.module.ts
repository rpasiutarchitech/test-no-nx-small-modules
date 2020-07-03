import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib25ParentContainerComponent} from './lib25-parent-container/lib25-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib25ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib25-container1/lib25-container1.module').then(m => m.Lib25Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib25-container2/lib25-container2.module').then(m => m.Lib25Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib25-container3/lib25-container3.module').then(m => m.Lib25Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib25-container4/lib25-container4.module').then(m => m.Lib25Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib25-container5/lib25-container5.module').then(m => m.Lib25Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib25-container6/lib25-container6.module').then(m => m.Lib25Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib25-container7/lib25-container7.module').then(m => m.Lib25Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib25-container8/lib25-container8.module').then(m => m.Lib25Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib25-container9/lib25-container9.module').then(m => m.Lib25Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib25-container10/lib25-container10.module').then(m => m.Lib25Container10Module)
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
  declarations: [Lib25ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib25ParentModule { }
