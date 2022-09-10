import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { IPet } from 'src/app/model/pet/pet.model';
import { ApiService } from 'src/app/api-services/api.service';
import { IPetState } from 'src/app/model/pet/pet.model';
import { PetActions } from '../pet-actions/pet.action';

@State<IPetState>({
  name: 'pet',
  defaults: {
    Pets: [],
    filteredPets: [],
    isLoading: false,
  },
})
@Injectable()
export class PetState {
  constructor(private service: ApiService) {}

  @Selector()
  static isLoading(state: IPetState): boolean {
    return state.isLoading;
  }

  @Selector()
  static getFilteredPets(state: IPetState): IPet[] {
    return state.filteredPets;
  }

  @Action(PetActions.AddPet)
  addPetStateAction(ctx: StateContext<IPetState>, action: PetActions.AddPet) {
    ctx.patchState({
      isLoading: true,
    });
    return this.service.addPet(action.payload).pipe(
      tap((res: IPet) => {
        const state = ctx.getState();
        ctx.setState({
          Pets: [...state.Pets, res],
          filteredPets: state.filteredPets,
          isLoading: false,
        });
      })
    );
  }

  @Action(PetActions.ShowPets)
  getPetByStatusStateAction(
    ctx: StateContext<IPetState>,
    action: PetActions.ShowPets
  ) {
    ctx.patchState({
      isLoading: true,
    });
    return this.service.showPets(action.status).pipe(
      tap((res: IPet[]) => {
        ctx.patchState({
          filteredPets: res,
          isLoading: false,
        });
      })
    );
  }
}
