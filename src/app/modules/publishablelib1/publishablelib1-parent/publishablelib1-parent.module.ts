import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Publishablelib1ParentContainerComponent} from './publishablelib1-parent-container/publishablelib1-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Publishablelib1ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../publishablelib1-container1/publishablelib1-container1.module').then(m => m.Publishablelib1Container1Module)
      },
      {
        path: 'container2',
        loadChildren: () => import('./../publishablelib1-container2/publishablelib1-container2.module').then(m => m.Publishablelib1Container2Module)
      },
      {
        path: 'container3',
        loadChildren: () => import('./../publishablelib1-container3/publishablelib1-container3.module').then(m => m.Publishablelib1Container3Module)
      },
      {
        path: 'container4',
        loadChildren: () => import('./../publishablelib1-container4/publishablelib1-container4.module').then(m => m.Publishablelib1Container4Module)
      },
      {
        path: 'container5',
        loadChildren: () => import('./../publishablelib1-container5/publishablelib1-container5.module').then(m => m.Publishablelib1Container5Module)
      },
      {
        path: 'container6',
        loadChildren: () => import('./../publishablelib1-container6/publishablelib1-container6.module').then(m => m.Publishablelib1Container6Module)
      },
      {
        path: 'container7',
        loadChildren: () => import('./../publishablelib1-container7/publishablelib1-container7.module').then(m => m.Publishablelib1Container7Module)
      },
      {
        path: 'container8',
        loadChildren: () => import('./../publishablelib1-container8/publishablelib1-container8.module').then(m => m.Publishablelib1Container8Module)
      },
      {
        path: 'container9',
        loadChildren: () => import('./../publishablelib1-container9/publishablelib1-container9.module').then(m => m.Publishablelib1Container9Module)
      },
      {
        path: 'container10',
        loadChildren: () => import('./../publishablelib1-container10/publishablelib1-container10.module').then(m => m.Publishablelib1Container10Module)
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
  declarations: [Publishablelib1ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Publishablelib1ParentModule { }
