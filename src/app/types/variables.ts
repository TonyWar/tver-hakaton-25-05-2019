import { HttpHeaders } from '@angular/common/http';

export const STORAGE_USER_TOKEN_KEY = 'userAuth';
export const AUTH_REPLACE_HEADER = 'needAuthHeader';
export const LOGOUT_ROUTE = '/sign-in';
export   const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};