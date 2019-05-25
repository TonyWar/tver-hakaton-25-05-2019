import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/types/user.model';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  users: UserProfile[];

  constructor(
    private userService: UserProfileService,
  ) { }

  ngOnInit() {
    this.userService.getAllUsers()
    .subscribe((users: UserProfile[]) => this.users = users)
  }

}
