import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aleaRNGFactory } from 'number-generator';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PetActions } from '../../store/pet-actions/pet.action';
import { IPetStatus } from 'src/app/model/pet/pet.model';
import { AuthState } from 'src/app/store/auth-state/auth.state';
import { IAuth } from 'src/app/model/auth/auth.model';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent implements OnInit {
  petStatus: IPetStatus[] = [
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

  name: String;
  image_url: String;
  status = 'available';

  constructor(
    private store: Store,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  onSubmit() {
    if (!this.name || !this.image_url) {
      this._snackBar.open('Please enter valid name and image url');
      return;
    }
    const obj = {
      id: aleaRNGFactory(10).uInt32(),
      category: {
        id: 0,
        name: 'default',
      },
      name: this.name,
      photoUrls: [this.image_url],
      tags: [
        {
          id: 0,
          name: 'pet',
        },
      ],
      status: this.status,
    };
    this.store.dispatch(new PetActions.AddPet(obj));
    this.router.navigateByUrl('/pets');
  }

  onCancel() {
    this.router.navigateByUrl('/pets');
  }

  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<IAuth>;
  checkAuth() {
    this.isAuthenticated$.subscribe((res: any) => {
      if (!res) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
