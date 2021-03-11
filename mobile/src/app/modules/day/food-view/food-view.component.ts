import { Component, Input, OnInit } from "@angular/core";
import { FoodRegistry } from "../food-registry/FoodRegistry";

@Component({
    selector: 'food-view',
    templateUrl: './food-view.component.html',
    styleUrls: ['./food-view.component.scss'],
  })
export class FoodViewComponent implements OnInit{

    @Input() foodType: string;
    @Input() food: FoodRegistry;

    
    constructor(){}

    ngOnInit(){

    }

}