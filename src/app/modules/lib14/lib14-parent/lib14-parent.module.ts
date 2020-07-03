import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib14ParentContainerComponent} from './lib14-parent-container/lib14-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib14ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib14-container1/lib14-container1.module').then(m => m.Lib14Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib14-container2/lib14-container2.module').then(m => m.Lib14Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib14-container3/lib14-container3.module').then(m => m.Lib14Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib14-container4/lib14-container4.module').then(m => m.Lib14Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib14-container5/lib14-container5.module').then(m => m.Lib14Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib14-container6/lib14-container6.module').then(m => m.Lib14Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib14-container7/lib14-container7.module').then(m => m.Lib14Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib14-container8/lib14-container8.module').then(m => m.Lib14Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib14-container9/lib14-container9.module').then(m => m.Lib14Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib14-container10/lib14-container10.module').then(m => m.Lib14Container10Module)
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
  declarations: [Lib14ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib14ParentModule { }
