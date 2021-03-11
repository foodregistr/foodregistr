import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-day-view-page',
  templateUrl: './day-view-page.component.html',
  styleUrls: ['./day-view-page.component.scss'],
})
export class DayViewPageComponent implements OnInit {

  public dayDate : string;

  constructor(private route: ActivatedRoute, private utilsService : UtilsService) {}

  ngOnInit() {
    this.dayDate = this.route.snapshot.paramMap.get("date") || this.utilsService.formatDate(new Date())

  }
}