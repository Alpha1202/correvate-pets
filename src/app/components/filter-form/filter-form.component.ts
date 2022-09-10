import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

import { IPetStatus } from 'src/app/model/pet/pet.model';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent implements OnInit {
  public petStatus: IPetStatus[] = [
    {
      item: 'Available',
      value: 'available',
    },
    {
      item: 'Pending',
      value: 'pending',
    },
    {
      item: 'Sold',
      value: 'sold',
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(FilterDialogComponent, {
      data: this.petStatus,
    });
  }
}
