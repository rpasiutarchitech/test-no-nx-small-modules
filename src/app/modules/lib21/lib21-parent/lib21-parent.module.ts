import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib21ParentContainerComponent} from './lib21-parent-container/lib21-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib21ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib21-container1/lib21-container1.module').then(m => m.Lib21Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib21-container2/lib21-container2.module').then(m => m.Lib21Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib21-container3/lib21-container3.module').then(m => m.Lib21Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib21-container4/lib21-container4.module').then(m => m.Lib21Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib21-container5/lib21-container5.module').then(m => m.Lib21Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib21-container6/lib21-container6.module').then(m => m.Lib21Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib21-container7/lib21-container7.module').then(m => m.Lib21Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib21-container8/lib21-container8.module').then(m => m.Lib21Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib21-container9/lib21-container9.module').then(m => m.Lib21Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib21-container10/lib21-container10.module').then(m => m.Lib21Container10Module)
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
  declarations: [Lib21ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib21ParentModule { }
