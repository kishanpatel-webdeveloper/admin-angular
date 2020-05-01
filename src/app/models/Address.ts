import { serializeAs, deserializeAs } from 'cerialize';
import { User } from './user';
export class Address {
  @serializeAs('id')
  @deserializeAs('id')
  private _id: string;

  @serializeAs('zipCode')
  @deserializeAs('zipCode')
  private _zipCode: string;

  @serializeAs('address')
  @deserializeAs('address')
  private _address: string;


  @serializeAs('idOfCountryMaster')
  @deserializeAs('idOfCountryMaster')
  private _idOfCountryMaster: string;


  @serializeAs('idOfStateMaster')
  @deserializeAs('idOfStateMaster')
  private _idOfStateMaster: string;


  @serializeAs('idOfCityMaster')
  @deserializeAs('idOfCityMaster')
  private _idOfCityMaster: string;



  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }


  /**
   * Getter address
   * @return {string}
   */
  public get address(): string {
    return this._address;
  }

  /**
   * Getter idOfCountryMaster
   * @return {string}
   */
  public get idOfCountryMaster(): string {
    return this._idOfCountryMaster;
  }

  /**
   * Getter idOfStateMaster
   * @return {string}
   */
  public get idOfStateMaster(): string {
    return this._idOfStateMaster;
  }

  /**
   * Getter idOfCityMaster
   * @return {string}
   */
  public get idOfCityMaster(): string {
    return this._idOfCityMaster;
  }



  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter address
   * @param {string} value
   */
  public set address(value: string) {
    this._address = value;
  }

  /**
   * Setter idOfCountryMaster
   * @param {string} value
   */
  public set idOfCountryMaster(value: string) {
    this._idOfCountryMaster = value;
  }

  /**
   * Setter idOfStateMaster
   * @param {string} value
   */
  public set idOfStateMaster(value: string) {
    this._idOfStateMaster = value;
  }

  /**
   * Getter zipCode
   * @return {string}
   */
  public get zipCode(): string {
    return this._zipCode;
  }

  /**
   * Setter zipCode
   * @param {string} value
   */
  public set zipCode(value: string) {
    this._zipCode = value;
  }

  /**
   * Setter idOfCityMaster
   * @param {string} value
   */
  public set idOfCityMaster(value: string) {
    this._idOfCityMaster = value;
  }



}
