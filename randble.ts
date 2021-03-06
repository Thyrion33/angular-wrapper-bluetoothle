import { Injectable } from '@angular/core'
import {
  Cordova,
  CordovaProperty,
  IonicNativePlugin,
  Plugin
} from '@ionic-native/core'
import { Observable } from 'rxjs/Observable'
import { Platform } from 'ionic-angular'

interface ICharacteristicPath {
  address: string,
  service: string,
  characteristic: string
}


@Plugin({
  pluginName: 'RandBLE',
  plugin: 'cordova-plugin-bluetoothle',
  pluginRef: 'bluetoothle',
  repo: 'https://github.com/randdusing/cordova-plugin-bluetoothle',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class   RandBLE extends IonicNativePlugin {
  constructor(public platform: Platform) {
    super()
  }

  @Cordova({callbackOrder: 'reverse'})
  initialize (params?: {request?: boolean, statusReceiver?: boolean, restoreKey?: string}):

  Promise<{ status: 'enabled' | 'disabled', message? : string }> {
    return
  }

  @Cordova({callbackOrder: 'reverse', sync: true})
  enable () {
    return
  }

  @Cordova({callbackOrder: 'reverse', sync: true})
  disable () {
    return
  }


  @Cordova({callbackOrder: 'reverse'})
  getAdapterInfo () : Promise<{
    name: string
    address: string
    isInitialized: boolean
    isEnabled: boolean
    isScanning: boolean
    isDiscoverable: boolean
  }> {
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  retrieveConnected (params?: any) : Promise<any> {
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  isEnabled (): Promise<{ isEnabled: boolean }> {
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  isDisabled (): Promise<{ isDisabled: boolean }> {
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  requestPermission (): Promise<{requestPermission: boolean}> {
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  requestLocation (): Promise<{requestLocation: boolean}> {
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  isLocationEnabled (): Promise<{isLocationEnabled: boolean}> {
    return
  }

  @Cordova({callbackOrder: 'reverse', observable: true})
  startScan (params: {
    allowDuplicates?: boolean
    matchNum?: number,
    callbackType?: number,
    scanMode?: number
    services: string[]
    }):

  Observable<{
    status: 'scanResult' | 'scanStarted',
    advertisement?: string | any,
    rssi?: number,
    name?: string,
    address?: string
  }> {
    return
  }

  @Cordova({callbackOrder: 'reverse', observable: true})
  bond (params: {
      address: string
      }):

  Observable<{
    status?: string
  }> {
    return
  }

  @Cordova({callbackOrder: 'reverse', observable: true})
  unbond (params: {
      address: string
      }):

  Observable<{
    status?: string
  }> {
    return
  }




  @Cordova({callbackOrder: 'reverse'})
  hasPermission () : Promise<{hasPermission: boolean}> {
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  disconnect (params: {address: string}) : Promise<{
    address: string,
    name: string
    status: 'disconnected',
  }> {
    return
  }

  /**
   * Note, no callback will occur on write without response on iOS.
   */
  @Cordova({callbackOrder: 'reverse'})
  write (params: ({
    value: string,
    type?: 'noResponse'
  } & ICharacteristicPath)) : Promise<any>{
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  read (params: ICharacteristicPath) : Promise<{value: string, name: string, status: string} & ICharacteristicPath> {
    return
  }


  @Cordova({callbackOrder: 'reverse', observable: true})
  isConnected (params: {
    address: string
    }):

  Observable<{
    name?: string,
    address?: string,
    isConnected?: boolean
  }> {
    return
  }


  @Cordova({callbackOrder: 'reverse', observable: true})
  wasConnected (params: {
    address: string
    }):

  Observable<{
    name?: string,
    address?: string,
    wasConnected?: boolean
  }> {
    return
  }


  @Cordova({callbackOrder: 'reverse', observable: true})
  connect (params: {address: string, autoConnect?: boolean}) : Observable<{
    name: string,
    address: string,
    status: 'connected' | 'disconnected'
  }> {
    return
  }



  @Cordova({callbackOrder: 'reverse'})
  close (params: {address: string}) : Promise<{
    name: string,
    address: string,
    status: 'closed',
  }> {
    return
  }



  @Cordova({callbackOrder: 'reverse'})
  discover (params: {address: string, clearCache?: boolean}) : Promise<{
    status: string,
    address: string,
    name: string,
    services: {
      uuid: string,
      characteristics: {
        uuid: string,
        descriptors: any[]
      }[]
    }[]
  }> {
    return
  }

  @Cordova({callbackOrder: 'reverse', observable: true})
  subscribe (params: ICharacteristicPath) : Observable<{status: 'subscribed' | 'subscribedResult', value: string}> {
    return
  }

  @Cordova({callbackOrder: 'reverse'})
  unsubscribe (params: any) {
    return
  }


  @Cordova({callbackOrder: 'reverse'})
  stopScan () : Promise<{status: 'scanStopped'}>{
    return
  }


  @Cordova({callbackOrder: 'reverse', observable: true})
  isBonded (params: {
    address: string
    }):

  Observable<{
    name?: string,
    address?: string,
    isBonded?: boolean
  }> {
    return
  }

  @CordovaProperty
  SCAN_MODE_OPPORTUNISTIC: number
  @CordovaProperty
  SCAN_MODE_LOW_POWER: number
  @CordovaProperty
  SCAN_MODE_BALANCED: number
  @CordovaProperty
  SCAN_MODE_LOW_LATENCY: number
  @CordovaProperty
  MATCH_NUM_ONE_ADVERTISEMENT: number
  @CordovaProperty
  MATCH_NUM_FEW_ADVERTISEMENT: number
  @CordovaProperty
  MATCH_NUM_MAX_ADVERTISEMENT: number
  @CordovaProperty
  MATCH_MODE_AGGRESSIVE: number
  @CordovaProperty
  MATCH_MODE_STICKY: number
  @CordovaProperty
  CALLBACK_TYPE_ALL_MATCHES: number
  @CordovaProperty
  CALLBACK_TYPE_FIRST_MATCH: number
  @CordovaProperty
  CALLBACK_TYPE_MATCH_LOST: number

  @Cordova({sync: true})
  bytesToEncodedString(bytes: Uint8Array): string {
    return
  }
  @Cordova({sync: true})
  encodedStringToBytes (string: string): Uint8Array {
    return
  }
  @Cordova({sync: true})
  bytesToString (bytes: Uint8Array): string {
    return
  }

  @Cordova({sync: true})
  stringToBytes (string: string): Uint8Array {
    return
  }
}