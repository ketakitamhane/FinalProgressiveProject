import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
<<<<<<< HEAD
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
=======
import { AuthComponent } from "./auth.component";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, UserComponent, UserListComponent, LogoutComponent],
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
<<<<<<< HEAD
    
=======
    LogoutComponent
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f
  ]
})
export class AuthModule {}
