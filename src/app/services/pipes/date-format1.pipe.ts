import {Pipe, PipeTransform} from '@angular/core';
import moment from 'moment';

@Pipe({
    name: 'dateFormat1'
})
export class DateFormat1Pipe implements PipeTransform {
    transform(value: unknown, ...args: unknown[]): unknown {
        return moment(value).format('YYYY-MM-DD HH:mm');
    }
}
