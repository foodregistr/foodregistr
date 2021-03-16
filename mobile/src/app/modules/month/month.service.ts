import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

    constructor(private router: Router){}

    public navigateToMonth(month: string): void {
        this.router.navigate(['tabs/month', month])
    }

    public navigateToDay(day: number, datestring: string){
        const date = datestring + "-" + day as string
        this.router.navigate(['tabs/day', date])
    }
}