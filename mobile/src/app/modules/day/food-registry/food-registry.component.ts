import { DayService } from './../day.service'
import { Component, OnInit } from '@angular/core'
import { Camera, CameraResultType } from '@capacitor/core'
import resetImageOrientation from 'orientation-exif-blob'
@Component({
  selector: 'food-registry',
  templateUrl: './food-registry.component.html',
  styleUrls: ['./food-registry.component.scss'],
})
export class FoodRegistryComponent implements OnInit {

  public hello

  public photoUrl: string;

  constructor(
    private dayService: DayService
  ) { }

  ngOnInit(): void {
    this.hello = this.dayService.getHello();
  }

  toggleUploadPhoto(): void {
    if (!this.photoUrl) {
      this.takePhoto()
    }
  }

  removePhoto(): void {
    this.photoUrl = ''
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
    this.photoUrl = image.webPath
  }
}
