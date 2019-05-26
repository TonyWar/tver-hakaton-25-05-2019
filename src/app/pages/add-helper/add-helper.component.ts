import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { UserProfileService } from "src/app/services/user-profile/user-profile.service";
import { Router } from "@angular/router";
import { UserRole } from "src/app/types/user.model";
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/types/categories.model';

@Component({
  selector: "app-add-helper",
  templateUrl: "./add-helper.component.html",
  styleUrls: ["./add-helper.component.less"]
})
export class AddHelperComponent implements OnInit {
  categories: Category[];

  public registryForm = this.fb.group({
    name: new FormControl("", [Validators.required]),
    secondName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    birthday: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    categories: new FormControl("")
  });

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private router: Router,
    private categoryisService: CategoriesService,
  ) {}

  ngOnInit() {
    this.categoryisService.getCategories()
    .subscribe((categories: Category[]) => this.categories = categories)
  }

  submit() {
    this.userProfileService
      .addUser({ ...this.registryForm.value, role: UserRole.HELPER })
      .subscribe(res => {
        this.router.navigate([`helper/profile/${res.id}`]);
      });
  }
}
