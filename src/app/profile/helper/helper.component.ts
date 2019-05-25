import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { UserProfile } from 'src/app/types/user.model';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.less']
})
export class HelperComponent implements OnInit {
  helper: UserProfile;

  constructor(
    private route: ActivatedRoute,
    private readonly userService: UserProfileService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.helperId) {
        this.userService.getUserById(params.helperId)
        .subscribe((helper: UserProfile) => this.helper = helper)
      }
    })
  }

}
