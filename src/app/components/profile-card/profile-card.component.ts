import { Component, OnInit, Input } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { UserProfile } from 'src/app/types/user.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: UserProfile;

  constructor() { }

  ngOnInit() {
  }

}
