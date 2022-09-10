import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { PetsComponent } from './components/pets/pets.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';

import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', 
    component: LoginPageComponent,
    // canActivate: [AuthGuard]
},
  { 
    path: 'pets', 
    component: PetsComponent,  
    // canActivate: [AuthGuard]
  },
  { 
    path: 'create-pet', 
    component: AddPetComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
