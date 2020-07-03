import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib2ParentContainerComponent} from './lib2-parent-container/lib2-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib2ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib2-container1/lib2-container1.module').then(m => m.Lib2Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib2-container2/lib2-container2.module').then(m => m.Lib2Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib2-container3/lib2-container3.module').then(m => m.Lib2Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib2-container4/lib2-container4.module').then(m => m.Lib2Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib2-container5/lib2-container5.module').then(m => m.Lib2Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib2-container6/lib2-container6.module').then(m => m.Lib2Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib2-container7/lib2-container7.module').then(m => m.Lib2Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib2-container8/lib2-container8.module').then(m => m.Lib2Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib2-container9/lib2-container9.module').then(m => m.Lib2Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib2-container10/lib2-container10.module').then(m => m.Lib2Container10Module)
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
  declarations: [Lib2ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib2ParentModule { }
