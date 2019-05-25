import { Component, OnInit } from '@angular/core';
import { UserProfile, UserRole } from 'src/app/types/user.model';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  users: UserProfile[];

  constructor(
    private userService: UserProfileService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params) => {
        if (params.role === 'helpers') {
          return this.userService.getHelperUsers();
        }

        if (params.role === 'olders') {
          return this.userService.getOlderUsers();
        }

        return this.userService.getAllUsers();
      })
    ).subscribe((users: UserProfile[]) => {
      this.users = users;
    })
  }

  goToProfile(user: UserProfile) {
    let roleUrl: string = this.whoIs(user);
    const url = `${roleUrl}/profile/${user.id}`
    console.log(url)

    this.router.navigate([`${roleUrl}/profile/${user.id}`])
  }

  private whoIs(user: UserProfile) {
    let roleUrl: string;
    if (user.role === UserRole.HELPER) {
      roleUrl = 'helper';
    }
    if (user.role === UserRole.OLDER) {
      roleUrl = 'older';
    }
    return roleUrl;
  }
}
