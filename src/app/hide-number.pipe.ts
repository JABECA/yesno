import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide-number'
})
export class HideNumberPipe implements PipeTransform {

  const numletras = 5;

  transform(name: string): string {
    return name.slice( , this.numletras);
  }

}
