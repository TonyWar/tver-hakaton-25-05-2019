import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  user = this.auth.userAuthData$;
  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

}
