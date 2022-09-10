import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

import { AuthActions } from 'src/app/store/auth-actions/auth.action';

@Component({
  selector: 'app-header-dialog',
  templateUrl: './header-dialog.component.html',
  styleUrls: ['./header-dialog.component.css'],
})
export class HeaderDialogComponent implements OnInit {
  constructor(
    private store: Store,
    private router: Router,
    public dialogRef: MatDialogRef<HeaderDialogComponent>
  ) {}

  ngOnInit(): void {}

  logout() {
    this.closeDialog();
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigateByUrl('/');
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
