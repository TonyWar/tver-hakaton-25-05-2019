import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserRole } from 'src/app/types/user.model';
import { of } from 'rxjs';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  profileLink = '';
  notifications = [];
  userId?: string;
  role?: string;

  constructor(
    private auth: AuthService,
    private notiS: NotificationsService
  ) { }

  ngOnInit() {
    this.auth.userAuthData$.pipe(map(user => {
      if (!user) { return ''; }
      let redirect = '';
      this.role = user.role;
      switch (user.role) {
        case UserRole.ADMIN:
          redirect = 'admin/profile';
          break;
        case UserRole.HELPER:
          redirect = 'helper/profile';
          break;
        case UserRole.OLDER:
          redirect = 'older/profile';
          break;
      }
      return redirect;
    }))
      .subscribe(res => {
        this.profileLink = res;
      });

    this.auth.userAuthData$.pipe(
      switchMap(user => {
        if (!user) {
          return of([]);
        }
        this.userId = user.id;
        return this.notiS.getUserNotifications(user.id);
      })
    )
      .subscribe(res => {
        this.notifications = res;
      });
  }

  getProfileLink() {
    return '';
  }

  removeNotif(id: string) {
    this.notiS.removeNotification(id)
      .subscribe(res => {
        if (!this.userId) { return; }
        this.notiS.getUserNotifications(this.userId)
          .subscribe(res => {
            this.notifications = res;
          });
      })
  }
}
