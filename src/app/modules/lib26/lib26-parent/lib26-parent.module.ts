import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib26ParentContainerComponent} from './lib26-parent-container/lib26-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib26ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib26-container1/lib26-container1.module').then(m => m.Lib26Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib26-container2/lib26-container2.module').then(m => m.Lib26Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib26-container3/lib26-container3.module').then(m => m.Lib26Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib26-container4/lib26-container4.module').then(m => m.Lib26Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib26-container5/lib26-container5.module').then(m => m.Lib26Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib26-container6/lib26-container6.module').then(m => m.Lib26Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib26-container7/lib26-container7.module').then(m => m.Lib26Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib26-container8/lib26-container8.module').then(m => m.Lib26Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib26-container9/lib26-container9.module').then(m => m.Lib26Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib26-container10/lib26-container10.module').then(m => m.Lib26Container10Module)
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
  declarations: [Lib26ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib26ParentModule { }
