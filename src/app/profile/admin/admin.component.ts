import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/types/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  user = this.auth.userAuthData$;

  mockUsers = [
    {
      id: '2',
      name: 'Дмитрий',
      secondName: 'Пурис',
      lastName: 'Николаевич',
      phone: '89157191250',
      categoryIds: ['1', '3', '6'],
      role: UserRole.HELPER,
      closedTasks: 23
    },
    {
      id: '12',
      name: 'Артём',
      secondName: 'Меркушев',
      lastName: 'Донатович',
      phone: '89040098219',
      categoryIds: ['2', '5'],
      role: UserRole.HELPER,
      closedTasks: 18,
    },
  ]
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateTo(to: string) {
    this.router.navigate([to]);
  }

  addHelper() {
    this.router.navigate(['admin/add_helper'])
  }
}
