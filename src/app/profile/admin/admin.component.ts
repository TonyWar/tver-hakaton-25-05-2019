import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  user = this.userProfileService.userProfile;
  constructor(
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit() {
  }

}
