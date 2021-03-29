import { Injectable } from '@angular/core';
import { PI, Rectangle } from './../shapes/Graphics';
@Injectable()
export class ProcessPanelService {

  // tslint:disable-next-line: variable-name
  private _canvas: HTMLCanvasElement;
  // tslint:disable-next-line: variable-name
  private _context2D: CanvasRenderingContext2D;
  constructor() { }

  get canvas() {
    return this._canvas;
  }

  set canvas(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }

  get content2D(): CanvasRenderingContext2D {
    return this._context2D;
  }

  set content2D(context2D: CanvasRenderingContext2D) {
    this._context2D = context2D;
  }

  addRact(graphic?: Rectangle) {
    const context = this.content2D;
    context.strokeStyle = '#00';
    context.fillStyle = '#e6c7ff';
    context.lineJoin = "round";
    context.beginPath(); // 开始点
    context.moveTo(30, 30);
    context.lineTo(230, 30);
    context.lineTo(230, 200);
    context.lineTo(30, 200);
    context.lineTo(30, 30);
    context.stroke(); // 进行绘制外边框
  }


  addRound(R, point) {
    this.content2D.fillStyle = '#e6c7ff';
    const ctx = this.content2D;
    ctx.beginPath();
    ctx.moveTo(20, 20);           // 创建开始点
    ctx.lineTo(100, 20);          // 创建水平线
    ctx.arcTo(150, 20, 150, 90, 50); // 创建弧
    ctx.lineTo(150, 120);         // 创建垂直线
    ctx.arcTo(150, 170, 20, 170, 50); // 创建弧
    ctx.lineTo(20, 170);
    ctx.stroke();
  }

  addRactT(width: number, height: number, r: number, start: number[] , linesize) {

    // 计算默认起点
    if (!start || start.length <= 0) {
      // start = [
      //   this.canvas.width / 2 - width / 2,
      //   20
      // ];
    }
    const point1 = start;
    const point2 = [width + start[0], start[1]];
    const point3 = [width + start[0], height + start[1]];
    const point4 = [start[0], height + start[1]];
    const R = r;
    this.content2D.fillStyle = '#e6c7ff';
    const ctx = this.content2D;
    ctx.lineWidth = linesize;
    // 绘制左上角
    ctx.beginPath();
    // 找到图形上边中心点
    const mid = [
      (point2[0] - point1[0]) / 2 + start[0],
      point1[1]
    ];
    ctx.moveTo(mid[0], mid[1]);
    ctx.lineTo(point2[0] - R, point2[1]);
    ctx.arcTo(point2[0], point2[1], point3[0], point2[1] + R, R);
    ctx.lineTo(point3[0], point3[1] - R);
    ctx.arcTo(point3[0], point3[1], point3[0] - R, point3[1], R);
    ctx.lineTo(point1[0] + R, point3[1]);
    ctx.arcTo(point4[0], point4[1], point4[0], point4[1] - R, R);
    ctx.lineTo(point1[0], point1[1] + R);
    ctx.arcTo(point1[0], point1[1], mid[0], mid[1], R);
    ctx.lineTo(mid[0], mid[1]);
    ctx.stroke();
  }

  addCheckRactT(width: number, height: number, r: number, start: number[] , linesize) {

    // 计算默认起点
    if (!start || start.length <= 0) {
      // start = [
      //   this.canvas.width / 2 - width / 2,
      //   20
      // ];
    }
    const point1 = start;
    const point2 = [width + start[0], start[1]];
    const point3 = [width + start[0], height + start[1]];
    const point4 = [start[0], height + start[1]];
    const R = r;
    this.content2D.fillStyle = '#e6c7ff';
    const ctx = this.content2D;
    ctx.lineWidth = linesize;
    // 绘制左上角
    ctx.beginPath();
    // 找到图形上边中心点
    ctx.moveTo(point1[0] , point1[1]);
    ctx.lineTo(point2[0] , point2[1]);
    ctx.lineTo(point3[0] , point3[1]);
    ctx.lineTo(point4[0] , point4[1]);
    ctx.lineTo(point1[0] , point1[1]);
    ctx.stroke();
  }
}
