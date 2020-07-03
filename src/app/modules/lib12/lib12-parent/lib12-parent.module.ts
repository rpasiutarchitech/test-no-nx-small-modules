import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib12ParentContainerComponent} from './lib12-parent-container/lib12-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib12ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib12-container1/lib12-container1.module').then(m => m.Lib12Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib12-container2/lib12-container2.module').then(m => m.Lib12Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib12-container3/lib12-container3.module').then(m => m.Lib12Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib12-container4/lib12-container4.module').then(m => m.Lib12Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib12-container5/lib12-container5.module').then(m => m.Lib12Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib12-container6/lib12-container6.module').then(m => m.Lib12Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib12-container7/lib12-container7.module').then(m => m.Lib12Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib12-container8/lib12-container8.module').then(m => m.Lib12Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib12-container9/lib12-container9.module').then(m => m.Lib12Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib12-container10/lib12-container10.module').then(m => m.Lib12Container10Module)
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
  declarations: [Lib12ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib12ParentModule { }
