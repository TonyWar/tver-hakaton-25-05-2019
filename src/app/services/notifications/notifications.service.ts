import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Notifications } from 'src/app/types/notifications.model';
import { httpOptions } from 'src/app/types/variables';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private profilesUrl = 'api/notifications';

  constructor(
    private http: HttpClient,
  ) { }

  getUserNotifications(userId: string) {
    return this.http.get<Notifications[]>(this.profilesUrl)
      .pipe(
        map(notifs => notifs.filter(n => n.userId === userId))
      );
  }

  addNotificationToUser(notif: Notifications) {
    return this.http.post<Notifications>(this.profilesUrl, notif, httpOptions);
  }

  removeNotification(id: string) {
    return this.http.delete<Notifications>(`${this.profilesUrl}/${id}`);
  }
}
