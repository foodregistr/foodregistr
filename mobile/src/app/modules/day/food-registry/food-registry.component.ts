import { UtilsService } from './../../utils/utils.service';
import { FoodRegistry } from './FoodRegistry';
import { DayService } from './../day.service'
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core'
import { Camera, CameraPhoto, CameraResultType } from '@capacitor/core'
import { IonTextarea } from '@ionic/angular';
@Component({
  selector: 'food-registry',
  templateUrl: './food-registry.component.html',
  styleUrls: ['./food-registry.component.scss'],
})
export class FoodRegistryComponent implements OnInit, AfterViewInit {

  public imageBlobUrl: string

  public description: string

  public image: string

  @ViewChild('description') textArea: IonTextarea;

  @Input()
  public date: string

  @Input()
  public foodType: string

  @Input()
  public foodRegistry: FoodRegistry

  constructor(
    private dayService: DayService,
    private utilsService: UtilsService
  ) {}

  ngAfterViewInit(){
    this.textArea.value = this.foodRegistry.description || null
  }
  
  ngOnInit(): void {
    this.foodType = this.utilsService.capitalize(this.foodRegistry.foodType)
    this.description = this.foodRegistry.description || null
    if(this.foodRegistry.imageId){
      this.dayService.getImage(this.foodRegistry.imageId).then(url => {
        this.utilsService.downloadImage(url)
        this.image = url
      }).catch(err => console.log(err))
    }
  }

  public getImage() : string{
    return this.imageBlobUrl || this.image || ""
  }

  public setDescription(event : any): void {
    this.description = event.target.value
  }

  public toggleUploadPhoto(): void {
      this.takePhoto().then( res => {
        this.imageBlobUrl = res.webPath
      }).catch( err => console.log(err));
  }

  public removePhoto(): void {
    this.imageBlobUrl = ''
    this.image = ''
    this.foodRegistry.imageId = ''
  }

  private takePhoto() : Promise<CameraPhoto>{
    return Camera.getPhoto({
      quality: 50,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      correctOrientation: true,
    })
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  }

  public submit(): Promise<any> {
    console.log(this.imageBlobUrl)
    const foodRegistry: FoodRegistry = {
      description: this.description,
      date: new Date(),
      foodType: this.utilsService.decapitalize(this.foodType),
      imageId: this.foodRegistry.imageId,
    }

    return this.dayService.registerFood(foodRegistry, this.imageBlobUrl)
  }

  public navigateToNextDay(): void {
    console.log('WIP')
  }

  public navigateToPrevDay(): void {
    console.log('WIP')
  }
}
