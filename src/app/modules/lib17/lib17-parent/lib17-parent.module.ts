import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib17ParentContainerComponent} from './lib17-parent-container/lib17-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib17ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib17-container1/lib17-container1.module').then(m => m.Lib17Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib17-container2/lib17-container2.module').then(m => m.Lib17Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib17-container3/lib17-container3.module').then(m => m.Lib17Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib17-container4/lib17-container4.module').then(m => m.Lib17Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib17-container5/lib17-container5.module').then(m => m.Lib17Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib17-container6/lib17-container6.module').then(m => m.Lib17Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib17-container7/lib17-container7.module').then(m => m.Lib17Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib17-container8/lib17-container8.module').then(m => m.Lib17Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib17-container9/lib17-container9.module').then(m => m.Lib17Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib17-container10/lib17-container10.module').then(m => m.Lib17Container10Module)
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
  declarations: [Lib17ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib17ParentModule { }
