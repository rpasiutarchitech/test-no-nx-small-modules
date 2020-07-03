import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib6ParentContainerComponent} from './lib6-parent-container/lib6-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib6ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib6-container1/lib6-container1.module').then(m => m.Lib6Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib6-container2/lib6-container2.module').then(m => m.Lib6Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib6-container3/lib6-container3.module').then(m => m.Lib6Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib6-container4/lib6-container4.module').then(m => m.Lib6Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib6-container5/lib6-container5.module').then(m => m.Lib6Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib6-container6/lib6-container6.module').then(m => m.Lib6Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib6-container7/lib6-container7.module').then(m => m.Lib6Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib6-container8/lib6-container8.module').then(m => m.Lib6Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib6-container9/lib6-container9.module').then(m => m.Lib6Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib6-container10/lib6-container10.module').then(m => m.Lib6Container10Module)
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
  declarations: [Lib6ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib6ParentModule { }
