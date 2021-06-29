import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent } from './template/template.component';

import { FirstTabComponent } from '../pages/first-link/first-tab/first-tab.component';
import { SecondTabComponent } from '../pages/first-link/second-tab/second-tab.component';
import { ThirdTabComponent } from '../pages/first-link/third-tab/third-tab.component';
import { FourthTabComponent } from '../pages/first-link/fourth-tab/fourth-tab.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'first-link/first-tab',
        component: FirstTabComponent
      },
      {
        path: 'first-link/second-tab',
        component: SecondTabComponent
      },
      {
        path: 'first-link/third-tab',
        component: ThirdTabComponent
      },
      {
        path: 'first-link/fourth-tab',
        component: FourthTabComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first-link/first-tab'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'first-link/first-tab'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
