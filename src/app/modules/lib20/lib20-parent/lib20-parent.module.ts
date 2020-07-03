import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib20ParentContainerComponent} from './lib20-parent-container/lib20-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib20ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib20-container1/lib20-container1.module').then(m => m.Lib20Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib20-container2/lib20-container2.module').then(m => m.Lib20Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib20-container3/lib20-container3.module').then(m => m.Lib20Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib20-container4/lib20-container4.module').then(m => m.Lib20Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib20-container5/lib20-container5.module').then(m => m.Lib20Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib20-container6/lib20-container6.module').then(m => m.Lib20Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib20-container7/lib20-container7.module').then(m => m.Lib20Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib20-container8/lib20-container8.module').then(m => m.Lib20Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib20-container9/lib20-container9.module').then(m => m.Lib20Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib20-container10/lib20-container10.module').then(m => m.Lib20Container10Module)
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
  declarations: [Lib20ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib20ParentModule { }
