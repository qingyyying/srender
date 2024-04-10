import { ShapeType } from "..";
import { Point } from "../math";
import { Shape } from "./Shape";

export class Circle extends Shape {
  public x: number;
  public y: number;
  public radius: number;
  public readonly type = ShapeType.Circle;

  constructor(x = 0, y = 0, radius = 0) {
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  public contains(point: Point): boolean {
    return true;
  }
}