import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib22ParentContainerComponent} from './lib22-parent-container/lib22-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib22ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib22-container1/lib22-container1.module').then(m => m.Lib22Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib22-container2/lib22-container2.module').then(m => m.Lib22Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib22-container3/lib22-container3.module').then(m => m.Lib22Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib22-container4/lib22-container4.module').then(m => m.Lib22Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib22-container5/lib22-container5.module').then(m => m.Lib22Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib22-container6/lib22-container6.module').then(m => m.Lib22Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib22-container7/lib22-container7.module').then(m => m.Lib22Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib22-container8/lib22-container8.module').then(m => m.Lib22Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib22-container9/lib22-container9.module').then(m => m.Lib22Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib22-container10/lib22-container10.module').then(m => m.Lib22Container10Module)
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
  declarations: [Lib22ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib22ParentModule { }
