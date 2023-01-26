import {Component, OnInit} from '@angular/core';
import {ApiUserService} from '@services/api/api-user.service';
import {ReqRefreshToken} from '@services/api/api-user/interface/users-refresh-token';
import {LocalService} from '@services/local.service';
import moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private timeInterval = null;
    constructor(
        private localStorageService: LocalService,
        private apiUser: ApiUserService
    ) {}

    ngOnInit() {
        this.refreshToken();
    }
    private refreshToken() {
        this.clearRefreshToken();
        this.timeInterval = setInterval(() => {
            const tokenExpire = this.localStorageService.getTokenExpire();
            if (!tokenExpire) {
                try {
                    const now = moment();
                    const expire = moment(tokenExpire);
                    const expireSub5 = moment(tokenExpire).subtract('5', 'm');

                    if (now.isAfter(expire)) {
                        // เวลา ปัจจุบัน มากกว่า เวลาหมดอายุ
                        this.localStorageService.clearToken();
                        this.localStorageService.clearTokenExpire();
                    } else if (now.isAfter(expireSub5)) {
                        // เวลา ปัจจุบัน มากกว่า เวลาหมดอายุ-5นาที
                        const body: ReqRefreshToken = {
                            accessToken: this.localStorageService.getToken(),
                            refreshToken:
                                this.localStorageService.getRefreshToken()
                        };
                        this.apiUser.userRefreshToken(body).subscribe(
                            (resp) => {
                                if (resp.resCode !== '0000')
                                    console.error('resCode error');
                                if (!resp.resData)
                                    console.error('resData null');
                                this.localStorageService.setToken(
                                    resp.resData.accessToken
                                );
                                this.localStorageService.setRefreshToken(
                                    resp.resData.refreshToken
                                );
                                this.localStorageService.setTokenExpire(
                                    resp.resData.expire
                                );
                            },
                            (err) => {
                                console.error('userRefreshToken -> ', err);
                            }
                        );
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }, 5 * 60 * 1000);
    }
    private clearRefreshToken() {
        if (this.timeInterval !== null) {
            clearInterval(this.timeInterval);
            this.timeInterval = null;
        }
    }
}
