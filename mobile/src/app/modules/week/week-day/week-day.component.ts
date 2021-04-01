import { Component, Input, OnInit } from "@angular/core";
import { UtilsService } from "../../utils/utils.service";
import { WeekService } from "../week.service";

@Component({
    selector: "week-day",
    templateUrl: "./week-day.component.html",
    styleUrls: ["./week-day.component.scss"]
}) export class WeekDayComponent implements OnInit{
    
    @Input() day: number;
    @Input() firstDayOfWeek: string;
    public date: Date;
    
    constructor(private weekService: WeekService, private utilsService: UtilsService){}

    ngOnInit(){
        const temp = this.utilsService.stringToDate(this.firstDayOfWeek)
        temp.setDate(temp.getDate() + this.day - 1)
        this.date = temp
    }

    navigateToDay(){
        this.weekService.navigateToDay(this.utilsService.formatDate(this.date))
    }

    hasNextDay(): boolean{
        return this.date > new Date()
    }
}