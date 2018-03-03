import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class capitalizadoPipe implements PipeTransform {
    transform(value: string, args: any[]):string {
        console.log(value);
        return value.toUpperCase();
    }
}