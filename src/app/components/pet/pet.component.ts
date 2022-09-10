import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IPet } from 'src/app/model/pet/pet.model';
import { PetDetailsDialogComponent } from '../pet-details-dialog/pet-details-dialog.component';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  @Input() pet: IPet;

  public status_icon = '';
  public status_icon_color = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.status_icon = this.getStatusIcon().icon;
    this.status_icon_color = this.getStatusIcon().color;
  }

  getStatusIcon() {
    const statusobj = {
      available: () => {
        return {
          icon: 'fiber_manual_record',
          color: 'primary',
        };
      },
      pending: () => {
        return {
          icon: 'pending',
          color: 'warn',
        };
      },
      sold: () => {
        return {
          icon: 'check_circle',
          color: 'accent',
        };
      },
    };

    return statusobj[this.pet.status]();
  }

  openPetDetailsDialog() {
    this.dialog.open(PetDetailsDialogComponent, {
      data: this.pet,
    });
  }
}
