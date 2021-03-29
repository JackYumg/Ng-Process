import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent, Observable } from 'rxjs';
import { ProcessPanelService } from './process-panel.service';
@Component({
  selector: 'app-process-panel',
  templateUrl: './process-panel.component.html',
  styleUrls: ['./process-panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessPanelComponent implements OnInit, OnDestroy {

  @ViewChild('panelElm', { static: true })
  panel: ElementRef;

  @Input()
  size: { width?: number, height?: number } = { width: 200, height: 200 };

  constructor(
    private processPanelService: ProcessPanelService
  ) {
  }

  ngOnInit(): void {
    this.initCanvas();
    this.initEvent();
  }

  initCanvas(): void {
    const canvas: HTMLCanvasElement = this.panel.nativeElement;
    canvas.height = this.size.height;
    canvas.width = this.size.width;
    const content = canvas.getContext('2d');
    content.fillStyle = '#ffffff';
    content.fillRect(0, 0, 200, 200);

    this.processPanelService.canvas = canvas;
    this.processPanelService.content2D = content;

    this.processPanelService.addRactT(184, 184, 30, [8, 8], 2);
    this.processPanelService.addCheckRactT(192, 192, 30, [4, 4], 1);
  }

  mouseEvent: Subscription;

  initEvent() {
    this.mouseEvent = fromEvent(this.panel.nativeElement, 'mousemove').subscribe((e: MouseEvent & { target: HTMLCanvasElement }) => {
      const target: HTMLCanvasElement = e.target;
      const left = target.offsetLeft;
      const top = target.offsetTop;
      const x = e.pageX - left;
      const y = e.pageY - top;
      if (y <= (100 + 300) && x <= (200 + 300)) {
        target.style.cursor = 'pointer';
      } else {
        target.style.cursor = 'auto';
      }
    });
  }

  ngOnDestroy() {
    if (this.mouseEvent) {
      this.mouseEvent.unsubscribe();
    }
  }

}
