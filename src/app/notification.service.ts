import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  logInfo(info: string) {
    console.log(info);
  }

  logError(err: string) {
    console.log(err);
  }
}
