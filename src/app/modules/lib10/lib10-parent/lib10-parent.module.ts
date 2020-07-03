import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib10ParentContainerComponent} from './lib10-parent-container/lib10-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib10ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib10-container1/lib10-container1.module').then(m => m.Lib10Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib10-container2/lib10-container2.module').then(m => m.Lib10Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib10-container3/lib10-container3.module').then(m => m.Lib10Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib10-container4/lib10-container4.module').then(m => m.Lib10Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib10-container5/lib10-container5.module').then(m => m.Lib10Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib10-container6/lib10-container6.module').then(m => m.Lib10Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib10-container7/lib10-container7.module').then(m => m.Lib10Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib10-container8/lib10-container8.module').then(m => m.Lib10Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib10-container9/lib10-container9.module').then(m => m.Lib10Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib10-container10/lib10-container10.module').then(m => m.Lib10Container10Module)
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
  declarations: [Lib10ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib10ParentModule { }
