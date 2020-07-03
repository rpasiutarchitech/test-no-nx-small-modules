import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'lib1',
    loadChildren: () => import('./modules/lib1/lib1-parent/lib1-parent.module').then(m => m.Lib1ParentModule)
  },
  {
    path: 'lib2',
    loadChildren: () => import('./modules/lib2/lib2-parent/lib2-parent.module').then(m => m.Lib2ParentModule)
  },
  {
    path: 'lib3',
    loadChildren: () => import('./modules/lib3/lib3-parent/lib3-parent.module').then(m => m.Lib3ParentModule)
  },
  {
    path: 'lib4',
    loadChildren: () => import('./modules/lib4/lib4-parent/lib4-parent.module').then(m => m.Lib4ParentModule)
  },
  {
    path: 'lib5',
    loadChildren: () => import('./modules/lib5/lib5-parent/lib5-parent.module').then(m => m.Lib5ParentModule)
  },
  {
    path: 'lib6',
    loadChildren: () => import('./modules/lib6/lib6-parent/lib6-parent.module').then(m => m.Lib6ParentModule)
  },
  {
    path: 'lib7',
    loadChildren: () => import('./modules/lib7/lib7-parent/lib7-parent.module').then(m => m.Lib7ParentModule)
  },
  {
    path: 'lib8',
    loadChildren: () => import('./modules/lib8/lib8-parent/lib8-parent.module').then(m => m.Lib8ParentModule)
  },
  {
    path: 'lib9',
    loadChildren: () => import('./modules/lib9/lib9-parent/lib9-parent.module').then(m => m.Lib9ParentModule)
  },
  {
    path: 'lib10',
    loadChildren: () => import('./modules/lib10/lib10-parent/lib10-parent.module').then(m => m.Lib10ParentModule)
  },
  {
    path: 'lib11',
    loadChildren: () => import('./modules/lib11/lib11-parent/lib11-parent.module').then(m => m.Lib11ParentModule)
  },
  {
    path: 'lib12',
    loadChildren: () => import('./modules/lib12/lib12-parent/lib12-parent.module').then(m => m.Lib12ParentModule)
  },
  {
    path: 'lib13',
    loadChildren: () => import('./modules/lib13/lib13-parent/lib13-parent.module').then(m => m.Lib13ParentModule)
  },
  {
    path: 'lib14',
    loadChildren: () => import('./modules/lib14/lib14-parent/lib14-parent.module').then(m => m.Lib14ParentModule)
  },
  {
    path: 'lib15',
    loadChildren: () => import('./modules/lib15/lib15-parent/lib15-parent.module').then(m => m.Lib15ParentModule)
  },
  {
    path: 'lib16',
    loadChildren: () => import('./modules/lib16/lib16-parent/lib16-parent.module').then(m => m.Lib16ParentModule)
  },
  {
    path: 'lib17',
    loadChildren: () => import('./modules/lib17/lib17-parent/lib17-parent.module').then(m => m.Lib17ParentModule)
  },
  {
    path: 'lib18',
    loadChildren: () => import('./modules/lib18/lib18-parent/lib18-parent.module').then(m => m.Lib18ParentModule)
  },
  {
    path: 'lib19',
    loadChildren: () => import('./modules/lib19/lib19-parent/lib19-parent.module').then(m => m.Lib19ParentModule)
  },
  {
    path: 'lib20',
    loadChildren: () => import('./modules/lib20/lib20-parent/lib20-parent.module').then(m => m.Lib20ParentModule)
  },
  {
    path: 'lib21',
    loadChildren: () => import('./modules/lib21/lib21-parent/lib21-parent.module').then(m => m.Lib21ParentModule)
  },
  {
    path: 'lib22',
    loadChildren: () => import('./modules/lib22/lib22-parent/lib22-parent.module').then(m => m.Lib22ParentModule)
  },
  {
    path: 'lib23',
    loadChildren: () => import('./modules/lib23/lib23-parent/lib23-parent.module').then(m => m.Lib23ParentModule)
  },
  {
    path: 'lib24',
    loadChildren: () => import('./modules/lib24/lib24-parent/lib24-parent.module').then(m => m.Lib24ParentModule)
  },
  {
    path: 'lib25',
    loadChildren: () => import('./modules/lib25/lib25-parent/lib25-parent.module').then(m => m.Lib25ParentModule)
  },
  {
    path: 'lib26',
    loadChildren: () => import('./modules/lib26/lib26-parent/lib26-parent.module').then(m => m.Lib26ParentModule)
  },
  {
    path: 'lib27',
    loadChildren: () => import('./modules/lib27/lib27-parent/lib27-parent.module').then(m => m.Lib27ParentModule)
  },
  {
    path: 'lib28',
    loadChildren: () => import('./modules/lib28/lib28-parent/lib28-parent.module').then(m => m.Lib28ParentModule)
  },
  {
    path: 'lib29',
    loadChildren: () => import('./modules/lib29/lib29-parent/lib29-parent.module').then(m => m.Lib29ParentModule)
  },
  {
    path: 'lib30',
    loadChildren: () => import('./modules/lib30/lib30-parent/lib30-parent.module').then(m => m.Lib30ParentModule)
  },
  {
    path: 'publishablelib1',
    loadChildren: () => import('./modules/publishablelib1/publishablelib1-parent/publishablelib1-parent.module').then(m => m.Publishablelib1ParentModule)
  }
];

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
