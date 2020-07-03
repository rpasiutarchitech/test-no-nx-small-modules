import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib27ParentContainerComponent} from './lib27-parent-container/lib27-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib27ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib27-container1/lib27-container1.module').then(m => m.Lib27Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib27-container2/lib27-container2.module').then(m => m.Lib27Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib27-container3/lib27-container3.module').then(m => m.Lib27Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib27-container4/lib27-container4.module').then(m => m.Lib27Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib27-container5/lib27-container5.module').then(m => m.Lib27Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib27-container6/lib27-container6.module').then(m => m.Lib27Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib27-container7/lib27-container7.module').then(m => m.Lib27Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib27-container8/lib27-container8.module').then(m => m.Lib27Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib27-container9/lib27-container9.module').then(m => m.Lib27Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib27-container10/lib27-container10.module').then(m => m.Lib27Container10Module)
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
  declarations: [Lib27ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib27ParentModule { }
