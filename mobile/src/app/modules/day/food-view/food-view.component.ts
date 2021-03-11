import { Component, Input, OnInit } from "@angular/core";
import { UtilsService } from "../../utils/utils.service";
import { DayService } from "../day.service";
import { FoodRegistry } from "../food-registry/FoodRegistry";

@Component({
    selector: 'food-view',
    templateUrl: './food-view.component.html',
    styleUrls: ['./food-view.component.scss'],
  })
export class FoodViewComponent implements OnInit{

    @Input() foodType: string;
    @Input() food: FoodRegistry;

    public image: string;
    public description: string;
    
    constructor(private utilsService: UtilsService, private dayService: DayService){}

    ngOnInit(){
        this.description = this.food.description || null
        this.foodType = this.utilsService.capitalize(this.food.foodType)
        if(this.food.imageId){
            this.dayService.getImage(this.food.imageId).then(url => {
                this.utilsService.downloadImage(url)
                this.image = url
            }).catch(err => console.log(err))
        }
    }

    public content() : boolean{
        return !this.image && !this.description
    }

}