import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib15ParentContainerComponent} from './lib15-parent-container/lib15-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib15ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib15-container1/lib15-container1.module').then(m => m.Lib15Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib15-container2/lib15-container2.module').then(m => m.Lib15Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib15-container3/lib15-container3.module').then(m => m.Lib15Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib15-container4/lib15-container4.module').then(m => m.Lib15Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib15-container5/lib15-container5.module').then(m => m.Lib15Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib15-container6/lib15-container6.module').then(m => m.Lib15Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib15-container7/lib15-container7.module').then(m => m.Lib15Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib15-container8/lib15-container8.module').then(m => m.Lib15Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib15-container9/lib15-container9.module').then(m => m.Lib15Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib15-container10/lib15-container10.module').then(m => m.Lib15Container10Module)
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
  declarations: [Lib15ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib15ParentModule { }
