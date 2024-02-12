import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD

const routes: Routes = [];
=======
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "users", component: UserListComponent },
  { path: "add-user", component: UserComponent },
];
>>>>>>> d3f1d25afcbe30b6a1df3c47400fe6736474356f

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
