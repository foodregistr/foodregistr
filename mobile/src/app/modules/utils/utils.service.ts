import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public async getBlob(blobUrl : string): Promise<any> {
    return await fetch(blobUrl).then(r => r.blob());
  }

  public downloadImage(url : string){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  }

  public formatDate(date: Date): string {
    return new Date(
      date.getTime() - (date.getTimezoneOffset() * 60000)
      ).toISOString().split('T')[0]
  }

  public stringToDate(dateString: string): Date{
    const splitedString = dateString.split("-")
    console.log(splitedString)
    return new Date(splitedString[0] as unknown as number, splitedString[1] as unknown as number - 1, splitedString[2] as unknown as number || 1)
  }

  public capitalize(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

  public decapitalize(str: string): string {
    return str[0].toLowerCase() + str.slice(1);
  }

  public getNextDay(dateString: string) : string{
    const date = this.stringToDate(dateString)
    date.setDate(date.getDate() + 1)
    return this.formatDate(date)
  }

  public getPrevDay(dateString: string) : string{
    const date = this.stringToDate(dateString)
    date.setDate(date.getDate() - 1)
    return this.formatDate(date)
  }

  public getNextMonth(dateString: string): string{
    const date = this.stringToDate(dateString)
    date.setMonth(date.getMonth() + 1)
    return this.formatDate(date).slice(0,7)
  }

  public getPrevMonth(dateString: string) : string{
    console.log(dateString)
    const date = this.stringToDate(dateString)
    date.setMonth(date.getMonth() - 1)
    return this.formatDate(date).slice(0,7)
  }

}
