import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib4ParentContainerComponent} from './lib4-parent-container/lib4-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib4ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib4-container1/lib4-container1.module').then(m => m.Lib4Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib4-container2/lib4-container2.module').then(m => m.Lib4Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib4-container3/lib4-container3.module').then(m => m.Lib4Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib4-container4/lib4-container4.module').then(m => m.Lib4Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib4-container5/lib4-container5.module').then(m => m.Lib4Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib4-container6/lib4-container6.module').then(m => m.Lib4Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib4-container7/lib4-container7.module').then(m => m.Lib4Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib4-container8/lib4-container8.module').then(m => m.Lib4Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib4-container9/lib4-container9.module').then(m => m.Lib4Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib4-container10/lib4-container10.module').then(m => m.Lib4Container10Module)
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
  declarations: [Lib4ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib4ParentModule { }
