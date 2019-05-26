import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from 'src/app/types/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: UserProfile;
  @Input() hideActions: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  addTask() {
    this.router.navigate([`/admin/add_task/${this.user.id}`])
  }
}
