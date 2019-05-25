import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/types/user.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {
  loginForm = this.fb.group({
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  matcher = new MyErrorStateMatcher();

  constructor(
    private readonly fb: FormBuilder,
    private readonly userProfileService: UserProfileService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  submit(event) {
    event.stopPropagation();
    event.preventDefault();
    this.userProfileService.getUserProfileAuth(this.loginForm.controls.phone.value)
      .subscribe(userProfile => {
        let redirect = '';
        switch (userProfile.role) {
          case UserRole.ADMIN:
            redirect = 'admin/profile';
            break;
          case UserRole.HELPER:
            redirect = 'helper/profile';
            break;
          case UserRole.OLDER:
            redirect = 'older/profile';
            break;
        }
        this.router.navigate([redirect]);
      },
        error => {
          console.log('fail', error);
        });
  }
}
