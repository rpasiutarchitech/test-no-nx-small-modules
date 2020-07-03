import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib7ParentContainerComponent} from './lib7-parent-container/lib7-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib7ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib7-container1/lib7-container1.module').then(m => m.Lib7Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib7-container2/lib7-container2.module').then(m => m.Lib7Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib7-container3/lib7-container3.module').then(m => m.Lib7Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib7-container4/lib7-container4.module').then(m => m.Lib7Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib7-container5/lib7-container5.module').then(m => m.Lib7Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib7-container6/lib7-container6.module').then(m => m.Lib7Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib7-container7/lib7-container7.module').then(m => m.Lib7Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib7-container8/lib7-container8.module').then(m => m.Lib7Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib7-container9/lib7-container9.module').then(m => m.Lib7Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib7-container10/lib7-container10.module').then(m => m.Lib7Container10Module)
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
  declarations: [Lib7ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib7ParentModule { }
