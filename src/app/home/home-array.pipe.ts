import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'homeArray'
})
export class HomeArrayPipe implements PipeTransform {

  transform(value: number): number[] {
    return Array.from({ length: value }, (_, i) => i);
  }

}
