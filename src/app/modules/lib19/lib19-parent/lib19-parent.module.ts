import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib19ParentContainerComponent} from './lib19-parent-container/lib19-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib19ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib19-container1/lib19-container1.module').then(m => m.Lib19Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib19-container2/lib19-container2.module').then(m => m.Lib19Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib19-container3/lib19-container3.module').then(m => m.Lib19Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib19-container4/lib19-container4.module').then(m => m.Lib19Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib19-container5/lib19-container5.module').then(m => m.Lib19Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib19-container6/lib19-container6.module').then(m => m.Lib19Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib19-container7/lib19-container7.module').then(m => m.Lib19Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib19-container8/lib19-container8.module').then(m => m.Lib19Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib19-container9/lib19-container9.module').then(m => m.Lib19Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib19-container10/lib19-container10.module').then(m => m.Lib19Container10Module)
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
  declarations: [Lib19ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib19ParentModule { }
