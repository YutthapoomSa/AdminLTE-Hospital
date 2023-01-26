import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'priorityThai'
})
export class PriorityThaiPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        switch (value) {
            case 'low':
                return 'น้อย';
            case 'medium':
                return 'ปานกลาง';
            case 'high':
                return 'สูง';
        }
        return null;
    }
}
