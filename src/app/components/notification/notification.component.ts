import { Component, OnInit } from '@angular/core';
import { Notification as RxJSNotification } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

export interface Notification {
  type: string,
  message: string
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = []

  constructor(private notificationService: NotificationService) {
    this.notificationService.newNotification$.subscribe(notification => {
      this.notifications.push({
        type: notification.type,
        message: notification.message
      });
    });
  }
  ngOnInit(): void {
  }

  private isShowing: boolean = false;

  toggleNotificationWindow(): void {
    let nc = document.getElementsByClassName("notification-content") as HTMLCollectionOf<HTMLElement>;
    if (nc.length != 0) {
      if (this.isShowing) {

        nc[0].style.display = "none";
      }
      else {
        nc[0].style.display = "block";
      }
      this.isShowing = !this.isShowing;
    }
  }

  private hide(): void {
    let nc = document.getElementsByClassName("notification-content") as HTMLCollectionOf<HTMLElement>;
    if (nc.length != 0) {
      nc[0].style.display = "none";
      this.isShowing = false;
    }
  }
}
