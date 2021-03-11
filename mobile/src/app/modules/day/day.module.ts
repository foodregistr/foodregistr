import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DayPageComponent } from "./day-page/day-page.component";
import { DayService } from "./day.service";
import { FoodRegistryComponent } from "./food-registry/food-registry.component";
import { UiModule } from '../ui/ui.module';
import { DayViewPageComponent } from './day-view-page/day-view-page.component';
import { DayNavComponent } from './day-nav/day-nav.component';
import { FoodViewComponent } from './food-view/food-view.component';

export const dayRoutes: Routes = [
  {
    path:      'register/:date',
    component: DayPageComponent
  },
  {
    path:      ':date',
    component: DayViewPageComponent
  },
  {
    path:      'register',
    component: DayPageComponent
  },
  {
    path:      '',
    component: DayViewPageComponent
  },
  
];

@NgModule({
    declarations: [FoodRegistryComponent, DayPageComponent, DayViewPageComponent, DayNavComponent, FoodViewComponent],
    exports: [FoodRegistryComponent, DayPageComponent, DayViewPageComponent],
    imports: [RouterModule.forChild(dayRoutes), CommonModule, ReactiveFormsModule, IonicModule, UiModule],
    providers: [DayService]
  })
  export class DayModule {}
