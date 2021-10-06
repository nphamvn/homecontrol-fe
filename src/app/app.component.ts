import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import * as signalR from '@microsoft/signalr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private log: NotificationService) { }

  ngOnInit(): void {
    //TODO: Connect SignalR connection here
    //console.log('Connect injected SignalR here');
    // const connection = new signalR.HubConnectionBuilder()
    //   .configureLogging(signalR.LogLevel.Information)
    //   .withUrl('https://localhost:6001/devicescontrol')
    //   .build();

    // connection.on('Broadcast', message => {
    //   console.log(message);
    // })

    // connection.start().then(function () {
    //   console.log('SignalR Connected!');
    // }).catch(function (err) {
    //   return console.error(err.toString());
    // });
  }
  title = 'Home Control';
}
