import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib3ParentContainerComponent} from './lib3-parent-container/lib3-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib3ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib3-container1/lib3-container1.module').then(m => m.Lib3Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib3-container2/lib3-container2.module').then(m => m.Lib3Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib3-container3/lib3-container3.module').then(m => m.Lib3Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib3-container4/lib3-container4.module').then(m => m.Lib3Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib3-container5/lib3-container5.module').then(m => m.Lib3Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib3-container6/lib3-container6.module').then(m => m.Lib3Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib3-container7/lib3-container7.module').then(m => m.Lib3Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib3-container8/lib3-container8.module').then(m => m.Lib3Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib3-container9/lib3-container9.module').then(m => m.Lib3Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib3-container10/lib3-container10.module').then(m => m.Lib3Container10Module)
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
  declarations: [Lib3ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib3ParentModule { }
