import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib8ParentContainerComponent} from './lib8-parent-container/lib8-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib8ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib8-container1/lib8-container1.module').then(m => m.Lib8Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib8-container2/lib8-container2.module').then(m => m.Lib8Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib8-container3/lib8-container3.module').then(m => m.Lib8Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib8-container4/lib8-container4.module').then(m => m.Lib8Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib8-container5/lib8-container5.module').then(m => m.Lib8Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib8-container6/lib8-container6.module').then(m => m.Lib8Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib8-container7/lib8-container7.module').then(m => m.Lib8Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib8-container8/lib8-container8.module').then(m => m.Lib8Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib8-container9/lib8-container9.module').then(m => m.Lib8Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib8-container10/lib8-container10.module').then(m => m.Lib8Container10Module)
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
  declarations: [Lib8ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib8ParentModule { }
