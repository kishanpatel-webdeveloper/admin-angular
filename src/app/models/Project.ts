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

  @serializeAs('priority')
  @deserializeAs('priority')
  private _priority: string;

  @serializeAs('permission')
  @deserializeAs('permission')
  private _permission: string;

  @serializeAs('description')
  @deserializeAs('description')
  private _description: string;

  @serializeAs('projectImgUrl')
  @deserializeAs('projectImgUrl')
  private _projectImgUrl: string;

  @serializeAs('dueDate')
  @deserializeAs('dueDate')
  private _dueDate: string;

  @serializeAs('startDate')
  @deserializeAs('startDate')
  private _startDate: string;

  @serializeAs('endDate')
  @deserializeAs('endDate')
  private _endDate: string;

  @serializeAs('estimation_cost')
  @deserializeAs('estimation_cost')
  private _estimation_cost: string;

  @serializeAs('estimation_time')
  @deserializeAs('estimation_time')
  private _estimation_time: string;

  @serializeAs('currency')
  @deserializeAs('currency')
  private _currency: string;

  @serializeAs('external_project_or_not')
  @deserializeAs('external_project_or_not')
  private _external_project_or_not: string;

  @serializeAs('tags')
  @deserializeAs('tags')
  private _setOfTags: any;

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

  /**
   * Getter priority
   * @return {string}
   */
  public get priority(): string {
    return this._priority;
  }

  /**
   * Setter priority
   * @param {string} value
   */
  public set priority(value: string) {
    this._priority = value;
  }

  /**
   * Getter startDate
   * @return {string}
   */
  public get startDate(): string {
    return this._startDate;
  }

  /**
   * Getter endDate
   * @return {string}
   */
  public get endDate(): string {
    return this._endDate;
  }

  /**
   * Setter startDate
   * @param {string} value
   */
  public set startDate(value: string) {
    this._startDate = value;
  }

  /**
   * Setter endDate
   * @param {string} value
   */
  public set endDate(value: string) {
    this._endDate = value;
  }

  /**
   * Getter estimation_cost
   * @return {string}
   */
  public get estimation_cost(): string {
    return this._estimation_cost;
  }

  /**
   * Getter estimation_time
   * @return {string}
   */
  public get estimation_time(): string {
    return this._estimation_time;
  }

  /**
   * Setter estimation_cost
   * @param {string} value
   */
  public set estimation_cost(value: string) {
    this._estimation_cost = value;
  }

  /**
   * Setter estimation_time
   * @param {string} value
   */
  public set estimation_time(value: string) {
    this._estimation_time = value;
  }

  /**
   * Getter setOfTags
   * @return {any}
   */
  public get setOfTags(): any {
    return this._setOfTags;
  }

  /**
   * Setter setOfTags
   * @param {any} value
   */
  public set setOfTags(value: any) {
    this._setOfTags = value;
  }

  /**
   * Getter projectImgUrl
   * @return {string}
   */
  public get projectImgUrl(): string {
    return this._projectImgUrl;
  }

  /**
   * Setter projectImgUrl
   * @param {string} value
   */
  public set projectImgUrl(value: string) {
    this._projectImgUrl = value;
  }

  /**
   * Getter external_project_or_not
   * @return {string}
   */
  public get external_project_or_not(): string {
    return this._external_project_or_not;
  }

  /**
   * Setter external_project_or_not
   * @param {string} value
   */
  public set external_project_or_not(value: string) {
    this._external_project_or_not = value;
  }

  /**
   * Getter currency
   * @return {string}
   */
  public get currency(): string {
    return this._currency;
  }

  /**
   * Setter currency
   * @param {string} value
   */
  public set currency(value: string) {
    this._currency = value;
  }

}

