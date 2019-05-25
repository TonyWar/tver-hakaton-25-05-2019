import { Injectable } from '@angular/core';
import { NgForage, NgForageCache } from 'ngforage';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from 'src/app/types/user.model';
import { STORAGE_USER_TOKEN_KEY } from 'src/app/types/variables';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly ngf: NgForage,
    private readonly cache: NgForageCache,
  ) {}

  public async getUserDataFromStorage(): Promise<UserProfile | undefined> {
    try {
      const user: UserProfile = await this.ngf.getItem<UserProfile>(STORAGE_USER_TOKEN_KEY);

      return user;
    } catch (error) {
      return undefined;
    }
  }

  public async setUserData(user: UserProfile): Promise<boolean> {
    try {
      await this.ngf.setItem(STORAGE_USER_TOKEN_KEY, user);

      return true;
    } catch (error) {
      return false;
    }
  }

  public async clearUserData(): Promise<boolean> {
    try {
      await this.ngf.removeItem(STORAGE_USER_TOKEN_KEY);

      return true;
    } catch (error) {
      return false;
    }
  }
}
