import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib24ParentContainerComponent} from './lib24-parent-container/lib24-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib24ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib24-container1/lib24-container1.module').then(m => m.Lib24Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib24-container2/lib24-container2.module').then(m => m.Lib24Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib24-container3/lib24-container3.module').then(m => m.Lib24Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib24-container4/lib24-container4.module').then(m => m.Lib24Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib24-container5/lib24-container5.module').then(m => m.Lib24Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib24-container6/lib24-container6.module').then(m => m.Lib24Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib24-container7/lib24-container7.module').then(m => m.Lib24Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib24-container8/lib24-container8.module').then(m => m.Lib24Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib24-container9/lib24-container9.module').then(m => m.Lib24Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib24-container10/lib24-container10.module').then(m => m.Lib24Container10Module)
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
  declarations: [Lib24ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib24ParentModule { }
