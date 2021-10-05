import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

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

    if (true) {
      this.log.logInfo('Connected')
    }
  }
  title = 'Home Control';
}
