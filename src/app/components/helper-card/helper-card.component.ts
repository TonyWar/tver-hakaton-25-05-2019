import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from 'src/app/types/user.model';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helper-card',
  templateUrl: './helper-card.component.html',
  styleUrls: ['./helper-card.component.less']
})
export class HelperCardComponent implements OnInit {
  @Input() helperId: string;
  helper: UserProfile;

  constructor(
    private userService: UserProfileService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userService.getUserById(this.helperId)
    .subscribe((helper: UserProfile) => {
      this.helper = helper;
      console.log('helper', helper)
    });
  }

  openProfile() {
    this.router.navigate([`helper/profile/${this.helper.id}`])
  }

}
