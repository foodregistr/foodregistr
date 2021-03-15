import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { UiModule } from "../ui/ui.module";
import { MonthPageComponent } from "./month-page/month-page.component";

export const monthRoutes: Routes = [
    {
        path: '',
        component: MonthPageComponent 
    }, {
        path: ':date',
        component: MonthPageComponent
    }
]

@NgModule({
    declarations: [MonthPageComponent],
    exports: [MonthPageComponent],
    imports: [RouterModule.forChild(monthRoutes), CommonModule, ReactiveFormsModule, IonicModule, UiModule]
}) export class MonthModule{}