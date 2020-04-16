import { serializeAs, deserializeAs } from 'cerialize';

export class User {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;


  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('profileImg')
  @deserializeAs('profileImg')
  private _profileImg: string;


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
   * Getter profileImg
   * @return {string}
   */
  public get profileImg(): string {
    return this._profileImg;
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
   * Setter profileImg
   * @param {string} value
   */
  public set profileImg(value: string) {
    this._profileImg = value;
  }




}
