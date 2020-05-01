import { serializeAs, deserializeAs } from 'cerialize';
import { Address } from './Address';

export class User {

  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;


  @serializeAs('firstName')
  @deserializeAs('firstName')
  private _firstName: string;

  @serializeAs('lastName')
  @deserializeAs('lastName')
  private _lastName: string;

  @serializeAs('name')
  @deserializeAs('name')
  private _name: string;

  @serializeAs('email')
  @deserializeAs('email')
  private _email: string;

  @serializeAs('mobileNo')
  @deserializeAs('mobileNo')
  private _mobileNo: string;

  @serializeAs('dateOfBirth')
  @deserializeAs('dateOfBirth')
  private _dateOfBirth: Date;

  @serializeAs('address')
  @deserializeAs('address')
  private _address: Address;

  @serializeAs('password')
  @deserializeAs('password')
  private _password: string;

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


  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter password
   * @return {string}
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }

  /**
   * Getter firstName
   * @return {string}
   */
  public get firstName(): string {
    return this._firstName;
  }

  /**
   * Getter lastName
   * @return {string}
   */
  public get lastName(): string {
    return this._lastName;
  }

  /**
   * Getter mobileNo
   * @return {string}
   */
  public get mobileNo(): string {
    return this._mobileNo;
  }

  /**
   * Getter dateOfBirth
   * @return {Date}
   */
  public get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  /**
   * Getter address
   * @return {Address}
   */
  public get address(): Address {
    return this._address;
  }

  /**
   * Setter firstName
   * @param {string} value
   */
  public set firstName(value: string) {
    this._firstName = value;
  }

  /**
   * Setter lastName
   * @param {string} value
   */
  public set lastName(value: string) {
    this._lastName = value;
  }

  /**
   * Setter mobileNo
   * @param {string} value
   */
  public set mobileNo(value: string) {
    this._mobileNo = value;
  }

  /**
   * Setter dateOfBirth
   * @param {Date} value
   */
  public set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }

  /**
   * Setter address
   * @param {Address} value
   */
  public set address(value: Address) {
    this._address = value;
  }

}
