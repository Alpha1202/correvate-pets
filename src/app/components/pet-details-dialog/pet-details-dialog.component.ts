import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

const regex = /(https?:\/\/.*\.(?:png|jpg))/i;

@Component({
  selector: 'app-pet-details-dialog',
  templateUrl: './pet-details-dialog.component.html',
  styleUrls: ['./pet-details-dialog.component.css'],
})
export class PetDetailsDialogComponent {
  public dog_placeholder_img = 'https://placedog.net/500?random';
  public cat_placeholder_img = 'http://placekitten.com/500';
  public pet_placeholder_img = 'https://via.placeholder.com/500';

  public pet_img: string = '';

  public status_icon = '';
  public status_icon_color = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PetDetailsDialogComponent>
  ) {}

  ngOnInit(): void {
    this.formatImgUrl();
    this.status_icon = this.getStatusIcon().icon;
    this.status_icon_color = this.getStatusIcon().color;
  }

  formatImgUrl() {
    const temp_url = this.data.photoUrls.find(
      (url: string) => regex.test(url) == true
    );
    this.pet_img = this.imgUrl(temp_url);
  }

  imgUrl(url: string): string {
    if (url) {
      return url;
    } else {
      const petCategory = this.data.category.name.toLowerCase();
      if (petCategory.includes('cat')) {
        return this.cat_placeholder_img;
      } else if (petCategory.includes('dog')) {
        return this.dog_placeholder_img;
      } else {
        return this.pet_placeholder_img;
      }
    }
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

    return statusobj[this.data.status]();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
