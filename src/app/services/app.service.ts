import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
import {ResRole} from './app-service';
@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = null;
    public isReceivePages: boolean = false;
    public trackingCodes: string[] = [];

    constructor(private router: Router, private toastr: ToastrService) {}

    async logout() {
        localStorage.removeItem('accessToken');
        // localStorage.removeItem('gatekeeper_token');
        this.user = null;
        await Swal.fire({
            icon: 'success',
            title: 'ออกจากระบบสำเร็จ',
            showConfirmButton: false,
            timer: 1000
        });
        await this.router.navigate(['/login']);
    }

    delay(time: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(null);
            }, time);
        });
    }

    getRole() {
        const role: ResRole[] = [
            {name: 'superAdmin', data: 'superAdmin'},
            {name: 'manager', data: 'manager'},
            {name: 'admin', data: 'admin'},
            {name: 'user', data: 'user'}
        ];

        return role;
    }

    getGender() {
        const gender: ResRole[] = [
            {name: 'ผู้ชาย', data: 'male'},
            {name: 'ผู้หญิง', data: 'female'},
            {name: 'อื่นๆ', data: 'other'}
        ];

        return gender;
    }

    successAlert(isSuccess: boolean, titles: string, time?: number) {
        if (isSuccess) {
            Swal.fire({
                icon: 'success',
                title: titles ? titles : 'สำเร็จ',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (!isSuccess) {
            Swal.fire({
                icon: 'error',
                title: titles ? titles : 'ไม่สำเร็จ',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    checkValidInputString(arg: string) {
        return arg ? 'invalid' : 'is-invalid';
    }

    async securePhoneNumber(phoneNumber: string) {
        // const pad = require('pad');
        let counter = 0;
        let returnPhoneNumber = '';
        if (phoneNumber.length === 10) {
            for (const item of phoneNumber) {
                if (counter >= 3 && counter <= 5) {
                    // pad()
                    returnPhoneNumber += 'x';
                } else {
                    returnPhoneNumber += item;
                }
                counter++;
            }
        }
        console.log('return phone number -> ', returnPhoneNumber);
        return returnPhoneNumber;
    }
}
