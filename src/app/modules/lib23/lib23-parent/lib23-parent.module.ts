import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib23ParentContainerComponent} from './lib23-parent-container/lib23-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib23ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib23-container1/lib23-container1.module').then(m => m.Lib23Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib23-container2/lib23-container2.module').then(m => m.Lib23Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib23-container3/lib23-container3.module').then(m => m.Lib23Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib23-container4/lib23-container4.module').then(m => m.Lib23Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib23-container5/lib23-container5.module').then(m => m.Lib23Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib23-container6/lib23-container6.module').then(m => m.Lib23Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib23-container7/lib23-container7.module').then(m => m.Lib23Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib23-container8/lib23-container8.module').then(m => m.Lib23Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib23-container9/lib23-container9.module').then(m => m.Lib23Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib23-container10/lib23-container10.module').then(m => m.Lib23Container10Module)
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
  declarations: [Lib23ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib23ParentModule { }
