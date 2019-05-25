import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { UserRole } from 'src/app/types/user.model';

@Component({
  selector: 'app-older-registry',
  templateUrl: './older-registry.component.html',
  styleUrls: ['./older-registry.component.less']
})
export class OlderRegistryComponent implements OnInit {

  public registryForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    secondName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {

  }

  submit() {
    this.userProfileService.addOlderUser({ ...this.registryForm.value, role: UserRole.OLDER })
      .subscribe(res => {
        console.log(res);
      });
  }
}
