import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  connection: signalR.HubConnection;

  newNotification$ = new BehaviorSubject<string>("New notification");

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://homecontrol-wepapp.azurewebsites.net/notification')
      .build();

    this.connect();
  }

  connect(): void {
    this.connection.on('NewNotification', message => {
      this.newNotification$.next(message);
    });

    this.connection.start().then(function () {
      console.log('NotificationHub Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
  }
}
