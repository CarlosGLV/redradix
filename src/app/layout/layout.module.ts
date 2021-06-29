import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { TemplateComponent } from './template/template.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FirstTabComponent } from '../pages/first-link/first-tab/first-tab.component';
import { SecondTabComponent } from '../pages/first-link/second-tab/second-tab.component';
import { ThirdTabComponent } from '../pages/first-link/third-tab/third-tab.component';
import { FourthTabComponent } from '../pages/first-link/fourth-tab/fourth-tab.component';


@NgModule({
  declarations: [
    TemplateComponent,

    HeaderComponent,
    FooterComponent,

    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent,
    FourthTabComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
