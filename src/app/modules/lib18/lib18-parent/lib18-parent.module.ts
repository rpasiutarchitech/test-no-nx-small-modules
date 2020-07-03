import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib18ParentContainerComponent} from './lib18-parent-container/lib18-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib18ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib18-container1/lib18-container1.module').then(m => m.Lib18Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib18-container2/lib18-container2.module').then(m => m.Lib18Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib18-container3/lib18-container3.module').then(m => m.Lib18Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib18-container4/lib18-container4.module').then(m => m.Lib18Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib18-container5/lib18-container5.module').then(m => m.Lib18Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib18-container6/lib18-container6.module').then(m => m.Lib18Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib18-container7/lib18-container7.module').then(m => m.Lib18Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib18-container8/lib18-container8.module').then(m => m.Lib18Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib18-container9/lib18-container9.module').then(m => m.Lib18Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib18-container10/lib18-container10.module').then(m => m.Lib18Container10Module)
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
  declarations: [Lib18ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib18ParentModule { }
