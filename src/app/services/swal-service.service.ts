import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class SwalServiceService {
    constructor() {}

    alert(type: boolean, msg?: string) {
        if (type) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: msg ? msg : 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: msg && msg !== '' ? msg : 'Something went wrong!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    confirmAlert(title?: string, msg?: string, confirmTxt?: string, cancelTxt?: string) {
        return new Promise((resolve, reject) =>
            Swal.fire({
                title: title && title !== '' ? title : 'Are you sure?',
                text: msg && msg !== '' ? msg : "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: confirmTxt && confirmTxt !== '' ? confirmTxt : 'Confirm',
                cancelButtonText: cancelTxt && cancelTxt !== '' ? cancelTxt : 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    return resolve(true);
                } else {
                    return resolve(false);
                }
            })
        );
    }
}
