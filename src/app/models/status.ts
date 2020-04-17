import { serializeAs, deserializeAs } from 'cerialize';
export class Status {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;


  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('color')
  @deserializeAs('color')
  private _color: string;


  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter color
   * @return {string}
   */
  public get color(): string {
    return this._color;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter color
   * @param {string} value
   */
  public set color(value: string) {
    this._color = value;
  }

}
