import { ObservablePoint, Transform } from "../math";
import { default as Eventemitter } from "eventemitter3";
import { Container } from "./Container";
import { DEG_TO_RAD, RAD_TO_DEG } from "../math/constants";
import { FederatedEventMap } from "../events";
import { Shape } from "../Shapes/Shape";
import { Cursor } from "../events/type";

export abstract class DisplayObject extends Eventemitter {
  public alpha = 1;
  public worldAlpha = 1;
  public visible = true;
  public transform = new Transform();
  protected _zIndex = 0;
  public parent: Container | null = null;
  public hitArea: Shape | null = null;
  public cursor: Cursor = "auto";

  get zIndex(): number {
    return this._zIndex;
  }

  set zIndex(value: number) {
    this._zIndex = value;
    if (this.parent) {
      this.parent.sortDirty = true;
    }
  }

  get position(): ObservablePoint {
    return this.transform.position;
  }

  get x(): number {
    
    return this.position.x;
  }

  set x(value: number) {

    this.transform.position.x = value;
  }

  get y(): number {
    return this.position.y;
  }

  set y(value: number) {
    this.transform.position.y = value;
  }

  get scale(): ObservablePoint {
    return this.transform.scale;
  }

  get pivot(): ObservablePoint {
    return this.transform.pivot;
  }

  get skew(): ObservablePoint {
    return this.transform.skew;
  }

  get rotation(): number {
    return this.transform.rotation;
  }

  set rotation(value: number) {
    this.transform.rotation = value;
  }

  get angle(): number {
    return this.transform.rotation * RAD_TO_DEG;
  }

  set angle(value: number) {
    this.transform.rotation = value * DEG_TO_RAD;
  }

  public addEventListener<K extends keyof FederatedEventMap>(
    type: K,
    listener: (e: FederatedEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ) {
    const capture =
      (typeof options === "boolean" && options) ||
      (typeof options === "object" && options.capture);

    const realType = capture ? `${type}capture` : type;

    if (typeof options === "object" && options.once) {
      this.once(realType, listener);
    } else {
      this.on(realType, listener);
    }
  }

  public removeEventListener<K extends keyof FederatedEventMap>(
    type: K,
    listener: (e: FederatedEventMap[K]) => any,
    capture: boolean
  ) {
    const realType = capture ? `${type}capture` : type;
    this.off(realType, listener);
  }
}
