import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from '../errors/errors.component';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [
    ErrorsComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    NgOptimizedImage
  ]
})
export class ErrorsModule { }
