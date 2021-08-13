import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';

import Backendless from 'backendless';
const APP_ID = '894D338F-43A2-A79C-FF54-360B70703E00';
const API_KEY = '5505209B-3467-42A5-9B53-81A598143BE9';
Backendless.initApp(APP_ID, API_KEY);


const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  // {path: '', component: ''},
  // {path: '', component: ''},
  // {path: '', component: ''},
  // {path: '', component: ''},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
