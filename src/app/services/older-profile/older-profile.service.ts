import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { UserProfile } from 'src/app/types/user.model';

@Injectable({
  providedIn: 'root'
})
export class OlderProfileService {
  olderProfile = new ReplaySubject<UserProfile>(1);
  constructor() { }
}
