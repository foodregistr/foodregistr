import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UiModule } from "../ui/ui.module";
import { AuthService } from "./auth.service";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";

export const authRoutes: Routes = [
  {
    path:      'login',
    component: LoginPageComponent
  },
  {
    path:      'signup',
    component: SignupPageComponent
  }
];

@NgModule({
    declarations: [LoginPageComponent, SignupPageComponent],
    entryComponents: [],
    exports: [LoginPageComponent, SignupPageComponent],
    imports: [RouterModule.forChild(authRoutes), UiModule, HttpClientModule, CommonModule],
    providers: [AuthService]
  })
  export class AuthModule {}
