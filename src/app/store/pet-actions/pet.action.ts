import { IPet } from 'src/app/model/pet/pet.model';

export namespace PetActions {
  export class AddPet {
    static readonly type = '[PET] AddPet';
    constructor(public payload: IPet) {}
  }

  export class ShowPets {
    static readonly type = '[PET] ShowPets';
    constructor(public status: String) {}
  }
}
