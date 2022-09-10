import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PetState } from 'src/app/store/pet-state/pet.state';
import { AuthState } from 'src/app/store/auth-state/auth.state';
import { IPet } from 'src/app/model/pet/pet.model';
import { IAuth } from 'src/app/model/auth/auth.model';
import { PetActions } from 'src/app/store/pet-actions/pet.action';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: IPet[] = [];
  breakpoint: number = 0;
  temp_width: number = 0;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.checkAuth();
    this.getPets();
    this.onResize(window);
  }

  @Select(PetState.getFilteredPets) getFilteredPets$: Observable<IPet>;
  getPets() {
    this.store.dispatch(new PetActions.ShowPets('available'));
    this.getFilteredPets$.subscribe((res: any) => {
      this.pets = res;
    });
  }

  @Select(AuthState.isAuthenticated) isAuthenticated$: Observable<IAuth>;
  checkAuth() {
    this.isAuthenticated$.subscribe((res: any) => {
      if (!res) {
        this.router.navigateByUrl('/');
      }
    });
  }

  onResize(event) {
    const temp_width = event.innerWidth;

    if (temp_width <= 768) {
      this.breakpoint = 1;
    } else if (temp_width >= 769 && temp_width <= 1142) {
      this.breakpoint = 2;
    } else if (temp_width >= 1143 && temp_width <= 1460) {
      this.breakpoint = 3;
    } else if (temp_width > 1460) {
      this.breakpoint = 4;
    }
  }
}
