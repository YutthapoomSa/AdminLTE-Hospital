import {Component, OnInit} from '@angular/core';
import {ApiLoginService} from '@services/api/api-login/api-login.service';
import {userProfile} from '@services/api/api-user/interface/api-user';
import {AppService} from '@services/app.service';
import {LocalService} from '@services/local.service';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public user: userProfile;
    public userFirstName: string;
    public userLastName: string;
    public userEmail: string;

    constructor(
        private appService: AppService,
        private apiLogin: ApiLoginService,
        private localService: LocalService
    ) {}

    async ngOnInit() {
        this.user = this.localService.getProfile();
        // console.log('this.user->', this.user.username);
    }
    logout() {
        this.appService.logout();
    }

    formatDate(date) {
        // return DateTime.fromISO(date).toFormat('dd LLL yyyy');
        return dayjs().format();
    }
}
