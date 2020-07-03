import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib28ParentContainerComponent} from './lib28-parent-container/lib28-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib28ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib28-container1/lib28-container1.module').then(m => m.Lib28Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../lib28-container2/lib28-container2.module').then(m => m.Lib28Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../lib28-container3/lib28-container3.module').then(m => m.Lib28Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../lib28-container4/lib28-container4.module').then(m => m.Lib28Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../lib28-container5/lib28-container5.module').then(m => m.Lib28Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../lib28-container6/lib28-container6.module').then(m => m.Lib28Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../lib28-container7/lib28-container7.module').then(m => m.Lib28Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../lib28-container8/lib28-container8.module').then(m => m.Lib28Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../lib28-container9/lib28-container9.module').then(m => m.Lib28Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../lib28-container10/lib28-container10.module').then(m => m.Lib28Container10Module)
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
  declarations: [Lib28ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib28ParentModule { }
