import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib1ParentContainerComponent} from './lib1-parent-container/lib1-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib1ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib1-container1/lib1-container1.module').then(m => m.Lib1Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib1-container2/lib1-container2.module').then(m => m.Lib1Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib1-container3/lib1-container3.module').then(m => m.Lib1Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib1-container4/lib1-container4.module').then(m => m.Lib1Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib1-container5/lib1-container5.module').then(m => m.Lib1Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib1-container6/lib1-container6.module').then(m => m.Lib1Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib1-container7/lib1-container7.module').then(m => m.Lib1Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib1-container8/lib1-container8.module').then(m => m.Lib1Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib1-container9/lib1-container9.module').then(m => m.Lib1Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib1-container10/lib1-container10.module').then(m => m.Lib1Container10Module)
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
  declarations: [Lib1ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib1ParentModule { }
