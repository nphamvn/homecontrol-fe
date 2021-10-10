import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { Notification } from '../components/notification/notification.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  connection: signalR.HubConnection;

  newNotification$ = new BehaviorSubject<Notification>({ type: "info", message: "New notification" });

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.baseUrl + '/notification')
      .build();

    this.connect();
  }

  connect(): void {
    this.connection.on('NewNotification', message => {
      const notification: Notification = {
        type: message.type,
        message: message.message
      };
      this.pushNewNotification(notification);
    });

    this.connection.start().then(function () {
      console.log('NotificationHub Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
  }

  pushNewNotification(notification: Notification): void {
    this.newNotification$.next(notification);
  }
}
