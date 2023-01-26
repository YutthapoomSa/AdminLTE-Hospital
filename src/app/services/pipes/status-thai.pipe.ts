import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'statusThai'
})
export class StatusThaiPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        switch (value) {
            case 'receive':
                return 'รับเข้าระบบ';
            case 'sendOut':
                return 'ส่งออกเอกสาร';
            case 'create':
                return 'สร้างเอกสาร';
            case 'success':
                return 'เอกสารดำเนินการสำเร็จ';
            default:
        }
    }
}
