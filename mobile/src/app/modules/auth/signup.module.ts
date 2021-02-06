import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UiModule } from "../ui/ui.module";
import { AuthService } from "./auth.service";
import { SignupPageComponent } from "./signup-page/signup-page.component";

export const signupRoutes: Routes = [

  {
    path:      '',
    component: SignupPageComponent
  }
];

@NgModule({
    declarations: [SignupPageComponent],
    exports: [SignupPageComponent],
    imports: [RouterModule.forChild(signupRoutes), UiModule],
    providers: [AuthService]
  })
  export class SignupModule {}