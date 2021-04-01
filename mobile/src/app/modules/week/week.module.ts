import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { UiModule } from "../ui/ui.module";
import { WeekPageComponent } from "./week-page/week-page.component";
import { WeekService } from "./week.service";

export const weekRoutes : Routes = [
    {
        path: '',
        component: WeekPageComponent
    },
    {
        path: ':startOfWeek/:endOfWeek',
        component: WeekPageComponent
    }
]

@NgModule({
    declarations: [WeekPageComponent],
    exports: [WeekPageComponent],
    imports: [RouterModule.forChild(weekRoutes), CommonModule, IonicModule, UiModule],
    providers: [WeekService]
}) export class WeekModule {}