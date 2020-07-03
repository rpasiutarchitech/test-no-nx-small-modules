import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib13ParentContainerComponent} from './lib13-parent-container/lib13-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib13ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib13-container1/lib13-container1.module').then(m => m.Lib13Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib13-container2/lib13-container2.module').then(m => m.Lib13Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib13-container3/lib13-container3.module').then(m => m.Lib13Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib13-container4/lib13-container4.module').then(m => m.Lib13Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib13-container5/lib13-container5.module').then(m => m.Lib13Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib13-container6/lib13-container6.module').then(m => m.Lib13Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib13-container7/lib13-container7.module').then(m => m.Lib13Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib13-container8/lib13-container8.module').then(m => m.Lib13Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib13-container9/lib13-container9.module').then(m => m.Lib13Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib13-container10/lib13-container10.module').then(m => m.Lib13Container10Module)
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
  declarations: [Lib13ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib13ParentModule { }
