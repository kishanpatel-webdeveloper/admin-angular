import { User } from './user';
import { serializeAs, deserializeAs } from 'cerialize';
export class Project {
  @serializeAs('id')
  @deserializeAs('id')
  private _id: number;

  @serializeAs('title')
  @deserializeAs('title')
  private _title: string;

  @serializeAs('status')
  @deserializeAs('status')
  private _status: string;

  @serializeAs('permission')
  @deserializeAs('permission')
  private _permission: string;

  @serializeAs('description')
  @deserializeAs('description')
  private _description: string;

  @serializeAs('dueDate')
  @deserializeAs('dueDate')
  private _dueDate: string;

  @serializeAs('users')
  @deserializeAs('users')
  private _users: Array<User>;


  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Getter status
   * @return {string}
   */
  public get status(): string {
    return this._status;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter dueDate
   * @return {string}
   */
  public get dueDate(): string {
    return this._dueDate;
  }

  /**
   * Getter users
   * @return {Array<User>}
   */
  public get users(): Array<User> {
    return this._users;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Setter status
   * @param {string} value
   */
  public set status(value: string) {
    this._status = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter dueDate
   * @param {string} value
   */
  public set dueDate(value: string) {
    this._dueDate = value;
  }

  /**
   * Setter users
   * @param {Array<User>} value
   */
  public set users(value: Array<User>) {
    this._users = value;
  }

  /**
   * Getter permission
   * @return {string}
   */
  public get permission(): string {
    return this._permission;
  }

  /**
   * Setter permission
   * @param {string} value
   */
  public set permission(value: string) {
    this._permission = value;
  }

}

