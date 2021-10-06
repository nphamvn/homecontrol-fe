import { Injectable, OnInit } from '@angular/core';
import { Light } from '../Light';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class DevicesControService {

  connection: signalR.HubConnection;

  constructor() {
    console.log('Injected');
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:6001/devicescontrol')
      .build();

    this.connect();
  }

  connect(): void {
    this.connection.on('Broadcast', message => {
      console.log(message);
    });

    this.connection.on('LightStateChanged', message => {
      console.log('LightStateChanged' + message.mode + message.brightness);
    });

    this.connection.start().then(function () {
      console.log('SignalR Connected!');
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
    this.connection.send('TurnOnLight').then(() => {
      console.log('Then in');
    })
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
