import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";

export const authRoutes: Routes = [
  {
    path:      '',
    component: LoginPageComponent
  },/*
  {
    path:      '/signup',
    component: SignupPageComponent
  }*/
];

@NgModule({
    declarations: [LoginPageComponent, SignupPageComponent],
    exports: [LoginPageComponent, SignupPageComponent],
    imports: [RouterModule.forChild(authRoutes),]
  })
  export class AuthModule {}