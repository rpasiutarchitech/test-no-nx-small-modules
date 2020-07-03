import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib9ParentContainerComponent} from './lib9-parent-container/lib9-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib9ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib9-container1/lib9-container1.module').then(m => m.Lib9Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib9-container2/lib9-container2.module').then(m => m.Lib9Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib9-container3/lib9-container3.module').then(m => m.Lib9Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib9-container4/lib9-container4.module').then(m => m.Lib9Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib9-container5/lib9-container5.module').then(m => m.Lib9Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib9-container6/lib9-container6.module').then(m => m.Lib9Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib9-container7/lib9-container7.module').then(m => m.Lib9Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib9-container8/lib9-container8.module').then(m => m.Lib9Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib9-container9/lib9-container9.module').then(m => m.Lib9Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib9-container10/lib9-container10.module').then(m => m.Lib9Container10Module)
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
  declarations: [Lib9ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib9ParentModule { }
