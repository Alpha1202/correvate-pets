import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IAuth } from 'src/app/model/auth/auth.model';
import { AuthActions } from 'src/app/store/auth-actions/auth.action';
import { AuthState } from 'src/app/store/auth-state/auth.state';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public username: String = '';
  public password: String = '';

  constructor(
    private store: Store,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<IAuth>;
  onSubmit() {
    if (!this.username || !this.password) {
      this._snackBar.open('Please enter valid username and password');
      return;
    }
    const obj = {
      username: this.username,
      password: this.password,
    };
    this.store.dispatch(new AuthActions.Login(obj));
    this.isAuthenticated$.subscribe((res: any) => {
      if (res) {
        this.router.navigateByUrl('/pets');
      }
    });
  }

  checkAuth() {
    this.isAuthenticated$.subscribe((res: any) => {
      if (res) {
        this.router.navigateByUrl('/pets');
      }
    });
  }
}
