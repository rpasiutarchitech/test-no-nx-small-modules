import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Lib1ParentContainerComponent} from './lib1-parent-container/lib1-parent-container.component';

const routes: Routes = [
  {
    path: '',
    component: Lib1ParentContainerComponent,
    children: [
      {
        path: 'container1',
        loadChildren: () => import('./../lib1-container1/lib1-container1.module').then(m => m.Lib1Container1Module)
      },
  //     {
  //       path: 'container2',
  //       component: Lib1Container2Component,
  //     },
  //     {
  //       path: 'container3',
  //       component: Lib1Container3Component,
  //     },
  //     {
  //       path: 'container4',
  //       component: Lib1Container4Component,
  //     },
  //     {
  //       path: 'container5',
  //       component: Lib1Container5Component,
  //     },
  //     {
  //       path: 'container6',
  //       component: Lib1Container6Component,
  //     },
  //     {
  //       path: 'container7',
  //       component: Lib1Container7Component,
  //     },
  //     {
  //       path: 'container8',
  //       component: Lib1Container8Component,
  //     },
  //     {
  //       path: 'container9',
  //       component: Lib1Container9Component,
  //     },
  //     {
  //       path: 'container10',
  //       component: Lib1Container10Component,
  //     },
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
  declarations: [Lib1ParentContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lib1ParentModule { }
