import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list'
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { MatChipsModule } from '@angular/material/chips';
import { NGXS_PLUGINS } from '@ngxs/store';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PetComponent } from './components/pet/pet.component';
import { PetsComponent } from './components/pets/pets.component';
import { AddPetComponent } from './components/add-pet/add-pet.component'
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FloatingActionButtonComponent } from './components/floating-action-button/floating-action-button.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { PetDetailsDialogComponent } from './components/pet-details-dialog/pet-details-dialog.component'
import { HeaderDialogComponent } from './components/header-dialog/header-dialog.component';

import { AuthState } from './store/auth-state/auth.state';
import { PetState } from './store/pet-state/pet.state';

import { logoutPlugin } from './logout-plugin';


@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetsComponent,
    AddPetComponent,
    LoginPageComponent,
    HeaderComponent,
    FloatingActionButtonComponent,
    FilterFormComponent,
    FilterDialogComponent,
    PetDetailsDialogComponent,
    HeaderDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule ,
    MatSelectModule,
    MatDialogModule,
    MatRippleModule,
    MatChipsModule,
    MatSidenavModule,
    MatSnackBarModule,
    NgxsModule.forRoot([AuthState, PetState]),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.session_token'
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
      {
        provide: NGXS_PLUGINS,
        useValue: logoutPlugin,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
