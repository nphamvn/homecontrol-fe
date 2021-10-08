import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: string[] = []

  constructor(private notificationService: NotificationService) {
    this.notificationService.newNotification$.subscribe(message => {
      this.notifications.push(message);
    });
  }

  ngOnInit(): void {
  }

}
