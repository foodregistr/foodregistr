import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UiModule } from "../ui/ui.module";
import { AuthService } from "./auth.service";
import { LoginPageComponent } from "./login-page/login-page.component";

export const loginRoutes: Routes = [

  {
    path:      '',
    component: LoginPageComponent
  }
];

@NgModule({
    declarations: [LoginPageComponent],
    exports: [LoginPageComponent],
    imports: [RouterModule.forChild(loginRoutes), UiModule],
    providers: [AuthService]
  })
  export class LoginModule {}