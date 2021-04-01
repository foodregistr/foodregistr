import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { WeekPageComponent } from "./week-page/week-page.component";

export const weekRoutes : Routes = [
    {
        path: '',
        component: WeekPageComponent
    }
]

@NgModule({
    declarations: [WeekPageComponent],
    exports: [WeekPageComponent],
    imports: [RouterModule.forChild(weekRoutes), CommonModule, IonicModule],
}) export class WeekModule {}