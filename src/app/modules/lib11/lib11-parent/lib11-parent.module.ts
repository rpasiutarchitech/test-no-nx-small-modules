import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib11ParentContainerComponent} from './lib11-parent-container/lib11-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib11ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib11-container1/lib11-container1.module').then(m => m.Lib11Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib11-container2/lib11-container2.module').then(m => m.Lib11Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib11-container3/lib11-container3.module').then(m => m.Lib11Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib11-container4/lib11-container4.module').then(m => m.Lib11Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib11-container5/lib11-container5.module').then(m => m.Lib11Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib11-container6/lib11-container6.module').then(m => m.Lib11Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib11-container7/lib11-container7.module').then(m => m.Lib11Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib11-container8/lib11-container8.module').then(m => m.Lib11Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib11-container9/lib11-container9.module').then(m => m.Lib11Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib11-container10/lib11-container10.module').then(m => m.Lib11Container10Module)
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
  declarations: [Lib11ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib11ParentModule { }
