import {Pipe, PipeTransform} from '@angular/core';
import moment from 'moment';

@Pipe({
    name: 'dateOnlyFormat'
})
export class DateOnlyFormatPipe implements PipeTransform {
    transform(value: unknown, ...args: unknown[]): unknown {
        return moment(value).add(543, 'y').lang('th').format('DD MMM YY');
    }
}
