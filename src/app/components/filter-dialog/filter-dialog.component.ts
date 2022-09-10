import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';

import { PetActions } from 'src/app/store/pet-actions/pet.action';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css'],
})
export class FilterDialogComponent {
  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<FilterDialogComponent>
  ) {}

  status = 'available';
  petStatus = this.data;

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close(this.status);
    this.store.dispatch(new PetActions.ShowPets(this.status));
  }
}
