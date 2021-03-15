import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'month-day',
    templateUrl: './month-day.component.html',
    styles: ['./month-day.component.scss']
})
export class MonthDayComponent implements OnInit{

    @Input() day : number;
    @Input() date: string;

    public activated : boolean;

    ngOnInit(){
        
    }
}