import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(src: string, defaultUrl: string): string {
      let imageSrc: string = "";
      
      if (src && src != "") {
        imageSrc = src;
      } else {
        imageSrc = defaultUrl;
      }
      return imageSrc;
    }
}
