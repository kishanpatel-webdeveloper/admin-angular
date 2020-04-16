import { serializeAs, deserializeAs } from 'cerialize';
import { Serializer } from '@angular/compiler';
import { User } from './user';
import { Status } from './status';
export class Card {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;


  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('description')
  @deserializeAs('description')
  private _description: string;

  @serializeAs('status')
  @deserializeAs('status')
  private _status: string;


  @serializeAs('members')
  @deserializeAs('members')
  private _members: Array<User>;

  @serializeAs('labels')
  @deserializeAs('labels')
  private _labels: Array<Status>;

  @serializeAs('comment')
  @deserializeAs('comment')
  private _comment: string;

  @serializeAs('coverImageUrl')
  @deserializeAs('coverImageUrl')
  private _coverImageUrl: string;

  @serializeAs('coverImageName')
  @deserializeAs('coverImageName')
  private _coverImageName: string;


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
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter comment
   * @return {string}
   */
  public get comment(): string {
    return this._comment;
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
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter comment
   * @param {string} value
   */
  public set comment(value: string) {
    this._comment = value;
  }

  /**
   * Getter status
   * @return {string}
   */
  public get status(): string {
    return this._status;
  }

  /**
   * Setter status
   * @param {string} value
   */
  public set status(value: string) {
    this._status = value;
  }


  /**
   * Getter members
   * @return {Array<User>}
   */
  public get members(): Array<User> {
    return this._members;
  }

  /**
   * Setter members
   * @param {Array<User>} value
   */
  public set members(value: Array<User>) {
    this._members = value;
  }

  /**
   * Getter labels
   * @return {Array<Status>}
   */
  public get labels(): Array<Status> {
    return this._labels;
  }

  /**
   * Setter labels
   * @param {Array<Status>} value
   */
  public set labels(value: Array<Status>) {
    this._labels = value;
  }

  /**
   * Getter coverImageUrl
   * @return {string}
   */
  public get coverImageUrl(): string {
    return this._coverImageUrl;
  }

  /**
   * Getter coverImageName
   * @return {string}
   */
  public get coverImageName(): string {
    return this._coverImageName;
  }

  /**
   * Setter coverImageUrl
   * @param {string} value
   */
  public set coverImageUrl(value: string) {
    this._coverImageUrl = value;
  }

  /**
   * Setter coverImageName
   * @param {string} value
   */
  public set coverImageName(value: string) {
    this._coverImageName = value;
  }

}
