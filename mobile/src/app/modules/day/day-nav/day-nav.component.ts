import { Component, Input, OnInit } from '@angular/core'
import { UtilsService } from '../../utils/utils.service';
import { DayService } from '../day.service';

@Component({
  selector: 'day-nav',
  templateUrl: './day-nav.component.html',
  styleUrls: ['./day-nav.component.scss'],
})
export class DayNavComponent implements OnInit {

    @Input() public date : string;
    @Input() public register: boolean;

    public hasNextDay : boolean;

    constructor(
        private dayService: DayService,
        private utilsService: UtilsService) {}

    ngOnInit() {
        this.hasNextDay = this.utilsService.formatDate(new Date()) > this.date
    }

    public navigateToNextDay(): void {
        const date = this.utilsService.stringToDate(this.date)
        date.setDate(date.getDate() + 1)
        const nextDay = this.utilsService.formatDate(date)
        this.dayService.navigateToDay(nextDay, this.register)
    }

    public navigateToPrevDay(): void {
        const date = this.utilsService.stringToDate(this.date)
        date.setDate(date.getDate() - 1)
        const nextDay = this.utilsService.formatDate(date)
        this.dayService.navigateToDay(nextDay, this.register)
    }
}