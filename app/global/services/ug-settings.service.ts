import { Injectable } from 'angular2/core';
import { UGSettings } from '../../ug-settings';

@Injectable()
export class UGSettings {
  UGSettings: UGSettings;
  constructor () {
    this.UGSettings = new UGSettings();
  }

  getUGSettings () {
    return this.UGSettings;
  }

}