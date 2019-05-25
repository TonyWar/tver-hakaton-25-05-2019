import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/types/user.model';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { ActivatedRoute } from '@angular/router';
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

    // this.userService.getAllUsers()
    // .subscribe((users: UserProfile[]) => this.users = users)
  }

}
