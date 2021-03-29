import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessPanelComponent } from './process-panel/process-panel.component';
import { CircleComponent } from './shapes/circle/circle.component';
import { ProcessPanelService } from './process-panel/process-panel.service';
import { RectangleComponent } from './shapes/rectangle/rectangle.component';

@NgModule({
  declarations: [ProcessPanelComponent, CircleComponent, RectangleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProcessPanelComponent
  ],
  providers: [
    ProcessPanelService
  ]
})
export class ProcessModelModule { }
