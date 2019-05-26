import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from 'src/app/types/user.model';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/types/categories.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: UserProfile;
  @Input() hideActions: boolean = false;
  categories: Category[];

  constructor(
    private router: Router,
    private categoryService: CategoriesService,
  ) { }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe((categories: Category[]) => {
      if (this.user.categoryIds) {
        this.categories =  categories.filter(cat => this.user.categoryIds.includes(cat.id))
      } else {
        this.categories = []
      }
      console.log(categories);
    })
  }

  addTask() {
    this.router.navigate([`/admin/add_task/${this.user.id}`])
  }
}
