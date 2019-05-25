import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

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
  ) { }

  ngOnInit() {
  }

  submit(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log(this.loginForm.value);
    this.userProfileService.getUserProfileAuth(this.loginForm.controls.phone.value)
      .subscribe(userProfile => {
        console.log(userProfile);
      },
      error => {
        console.log('fail', error);
      })
  }
}
