import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeekService {

    constructor(private router: Router){}

    navigateToWeek(startDay :string, endDay: string){
        this.router.navigate(["tabs/week", startDay, endDay])
    }

    navigateToDay(date){
        this.router.navigate(["tabs/day", date])
    }
}