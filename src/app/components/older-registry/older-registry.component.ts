import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-older-registry',
  templateUrl: './older-registry.component.html',
  styleUrls: ['./older-registry.component.less']
})
export class OlderRegistryComponent implements OnInit {

  public registryForm;
  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    this.registryForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      old: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    console.log(this.registryForm.value)
  }

}
