import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../utils/utils.service';
import { DayService } from '../day.service';
import { FoodRegistry } from '../food-registry/FoodRegistry';

@Component({
  selector: 'app-day-view-page',
  templateUrl: './day-view-page.component.html',
  styleUrls: ['./day-view-page.component.scss'],
})
export class DayViewPageComponent implements OnInit {

  public dayDate : string;

  foodRegistries: FoodRegistry[]

  foodTypes: string[]

  constructor(private route: ActivatedRoute, private utilsService : UtilsService, private dayService: DayService) {}

  ngOnInit() {
    this.foodTypes = this.dayService.getFoodTypes()
    this.dayDate = this.route.snapshot.paramMap.get("date") || this.utilsService.formatDate(new Date())
    this.dayService.getFoodRegistriesFromDay(this.dayDate).then( (data: any) => {
      this.foodRegistries = this.dayService.mapPreviousRegistries(data)
    })

  }
}