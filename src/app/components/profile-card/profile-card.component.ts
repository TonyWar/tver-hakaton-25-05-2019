import { Component, OnInit, Input } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent implements OnInit {
  @Input() name;
  @Input() surname;
  @Input() description;
  @Input() subtitle;
  
  constructor() { }

  ngOnInit() {
  }

}
