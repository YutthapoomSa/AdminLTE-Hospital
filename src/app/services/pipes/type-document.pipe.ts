import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'typeDocument'
})
export class TypeDocumentPipe implements PipeTransform {
    transform(value: unknown, ...args: unknown[]): unknown {
        let type = '';

        switch (value) {
            case 'internal':
                type = 'ภายใน';
                break;
            case 'external':
                type = 'ภายนอก';
                break;
            case 'เอกสารภายใน':
                type = 'ภายใน';
                break;
            case 'เอกสารภายนอก':
                type = 'ภายนอก';
                break;
        }
        return type;
    }
}
