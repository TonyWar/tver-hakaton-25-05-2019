import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { map } from 'rxjs/operators';
import { UserRole } from 'src/app/types/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  profileLink = '';

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.userAuthData$.pipe(map(user => {
      if (!user) { return ''; }
      let redirect = '';
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
    })
  }

  getProfileLink() {
    return '';
  }
}
