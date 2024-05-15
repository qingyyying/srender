import { Point } from "../math";

export interface IShapeStyle {
  fill?: string
  stroke?: string;
  lineWidth?: string
}

export interface BBox {
  minX: number;
	minY: number;
	maxX: number;
	maxY: number;
	centerX: number;
	centerY: number;
}

// 锚点类型
export interface AnchorPort {
  id: number;
  point: Point
}

// 二次贝塞尔曲线的config
export interface QuadraticCurveConfig {
  anchorPoints: number[]
}


// 三次贝塞尔曲线的config
export interface BezierCurveConfig {
  anchorPoints: number[][]
}

// 正交直线的config
export interface  OrthogonalConfig {
  anchorPoints?: number[][]
}