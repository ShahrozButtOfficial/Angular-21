import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataformat',
})
export class DataformatPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
