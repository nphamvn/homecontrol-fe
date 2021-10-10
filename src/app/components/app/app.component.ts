import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import * as signalR from '@microsoft/signalr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private log: NotificationService) { }

  ngOnInit(): void {
  }
}
