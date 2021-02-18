import { FoodRegistry } from './FoodRegistry';
import { DayService } from './../day.service'
import { Component } from '@angular/core'
import { Camera, CameraResultType } from '@capacitor/core'
@Component({
  selector: 'food-registry',
  templateUrl: './food-registry.component.html',
  styleUrls: ['./food-registry.component.scss'],
})
export class FoodRegistryComponent {

  public imageBlobUrl: string;

  public description: string;

  public foodType: string;

  constructor(
    private dayService: DayService
  ) { }

  toggleUploadPhoto(): void {
    if (!this.imageBlobUrl) {
      this.takePhoto()
    }
  }

  removePhoto(): void {
    this.imageBlobUrl = ''
  }

  private async takePhoto(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      correctOrientation: true,
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imageBlobUrl = image.webPath
  }

  public submit(): Promise<any> {
    const foodRegistry: FoodRegistry = {
      description: this.description || 'Descripcion de prueba',
      date: new Date(),
      foodType: this.foodType || 'breakfast'
    }

    return this.dayService.registerFood(foodRegistry, this.imageBlobUrl)
  }
}
