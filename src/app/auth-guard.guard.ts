import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from './store/auth-state/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store) {}

  canActivate() {
    const isAuthenticated = this.store.select(AuthState.isAuthenticated);
    return isAuthenticated;
  }
  
}
