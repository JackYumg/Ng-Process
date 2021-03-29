enum GraphicType {
  round = 1, // 圆
  rectangle, // 矩形
  diamond // 菱形
}

// 几何
export interface GeomeryEntry {
  left: number;
  top: number;
  // 矩形时使用
  points: Array<Array<number>>; // [[左,上],[右,上],[左,下],[右,下]] // 分别是四个点为 【left , top】
  R: number; // 半径，是圆与椭圆时
}

export interface InGraphics {
  type: GraphicType; // 表示未什么图形
  // geometry: Geomery;
  propertys?: { [key: string]: any }; // 属性，用于存储图形之外的数据
}

export const PI = Math.PI;
