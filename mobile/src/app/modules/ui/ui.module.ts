import { IonicModule } from '@ionic/angular';
import { NgModule } from "@angular/core";
import { PasswordInputFieldComponent } from "./password-input-field/password-input-field.component";
import { TabsComponent } from "./tabs/tabs.component";
import { TextInputFieldComponent } from "./text-input-field/text-input-field.component";

@NgModule({
    declarations: [TextInputFieldComponent, PasswordInputFieldComponent, TabsComponent],
    exports: [TextInputFieldComponent, PasswordInputFieldComponent, TabsComponent],
    imports: [IonicModule],
  })
  export class UiModule {}
