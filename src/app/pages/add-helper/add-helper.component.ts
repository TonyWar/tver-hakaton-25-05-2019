import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { UserProfileService } from "src/app/services/user-profile/user-profile.service";
import { Router } from "@angular/router";
import { UserRole } from "src/app/types/user.model";

@Component({
  selector: "app-add-helper",
  templateUrl: "./add-helper.component.html",
  styleUrls: ["./add-helper.component.less"]
})
export class AddHelperComponent implements OnInit {
  categories = [
    "Убраться дома",
    "Купить продукты",
    "Помыть окна",
    "Помочь дойти",
    "Помочь по дому",
    "Выехать на дачу",
    "Другое"
  ];

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
    private router: Router
  ) {}

  ngOnInit() {}

  submit() {
    console.log('helper', { ...this.registryForm.value, role: UserRole.HELPER })
    this.userProfileService
      .addUser({ ...this.registryForm.value, role: UserRole.HELPER })
      .subscribe(res => {
        this.router.navigate([`helper/profile/${res.id}`]);
      });
  }
}
