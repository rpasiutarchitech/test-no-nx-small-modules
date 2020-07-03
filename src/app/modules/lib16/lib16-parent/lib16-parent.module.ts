import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib16ParentContainerComponent} from './lib16-parent-container/lib16-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib16ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib16-container1/lib16-container1.module').then(m => m.Lib16Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib16-container2/lib16-container2.module').then(m => m.Lib16Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib16-container3/lib16-container3.module').then(m => m.Lib16Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib16-container4/lib16-container4.module').then(m => m.Lib16Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib16-container5/lib16-container5.module').then(m => m.Lib16Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib16-container6/lib16-container6.module').then(m => m.Lib16Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib16-container7/lib16-container7.module').then(m => m.Lib16Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib16-container8/lib16-container8.module').then(m => m.Lib16Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib16-container9/lib16-container9.module').then(m => m.Lib16Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib16-container10/lib16-container10.module').then(m => m.Lib16Container10Module)
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
  declarations: [Lib16ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib16ParentModule { }
