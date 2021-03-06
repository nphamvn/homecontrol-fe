import { Injectable, OnInit } from '@angular/core';
import { AirConditioner, Environment, Light } from '../../Light';
import * as signalR from '@microsoft/signalr';
import { state } from '@angular/animations';
import { EventEmitter } from 'stream';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DevicesControService {

  lightStateChanged$ = new BehaviorSubject<Light>({ mode: "OFF", brightness: 0 });
  environmentSensorDataChanged$ = new BehaviorSubject<Environment>({ temperature: 0, humidity: 0 });
  airConditionerStateChanged$ = new BehaviorSubject<AirConditioner>({ mode: "OFF", temperature: 0 });

  connection: signalR.HubConnection;

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.baseUrl + '/devicescontrol')
      .build();

    this.connect();
  }

  connect(): void {
    this.connection.on('LightStateChanged', message => {
      const light: Light = {
        mode: message.mode,
        brightness: message.brightness
      };
      this.lightStateChanged$.next(light);
    });

    this.connection.on("EnvironmentSensorDataChanged", message => {
      const sensor: Environment = {
        temperature: message.temperature,
        humidity: message.humidity
      };
      this.environmentSensorDataChanged$.next(sensor);
    });

    this.connection.start().then(function () {
      console.log('DevicesControlHub Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
  }

  getState(): Light {
    return {
      mode: 'ON',
      brightness: 5
    };
  }
  turnOnLight(): Light {
    this.connection.send('TurnOnLight');
    return {
      mode: 'ON',
      brightness: 5
    };
  }

  turnOffLight(): Light {
    console.log(this.turnOffLight);
    return {
      mode: 'ON',
      brightness: 5
    };
  }
  brightenLight(): Light {
    console.log(this.brightenLight);
    return {
      mode: 'ON',
      brightness: 5
    };
  }
  dimLight(): Light {
    console.log(this.dimLight);
    return {
      mode: 'ON',
      brightness: 5
    };
  }
}
