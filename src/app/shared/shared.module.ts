import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessModelModule } from './process-model/process-model.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProcessModelModule
  ],
  exports: [
    ProcessModelModule
  ]
})
export class SharedModule { }
