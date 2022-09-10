import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { AuthState } from 'src/app/store/auth-state/auth.state';
import { IAuth } from 'src/app/model/auth/auth.model';
import { AuthActions } from 'src/app/store/auth-actions/auth.action';

import { HeaderDialogComponent } from '../header-dialog/header-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(
    private store: Store,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<IAuth>;
  checkAuth() {
    this.isAuthenticated$.subscribe((res: any) => {
      this.isAuthenticated = res;
    });
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigateByUrl('/');
  }

  openDialog() {
    this.dialog.open(HeaderDialogComponent, {});
  }
}
