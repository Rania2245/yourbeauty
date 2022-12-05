import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dinar',
})
export class DinarPipe implements PipeTransform {
  transform(prix: number): number {
    return prix * 3.2;
  }
}
