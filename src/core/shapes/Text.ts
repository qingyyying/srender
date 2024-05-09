import { ShapeType } from "../enums";
import { Point } from "../math";
import { Shape } from "./Shape";

export class Text extends Shape {
  public x: number;
  public y: number;
  public offsetX: number;
  public offsetY: number;
  public text: string;

  public type = ShapeType.Text;
  constructor(x = 0, y = 0, text = "") {
    super();
    this.offsetX = x;
    this.offsetY = y;

    this.x = 0;
    this.y = 0;
    this.text = text
  }

  public setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public contains(point: Point): boolean {
    return false;
  }
}
