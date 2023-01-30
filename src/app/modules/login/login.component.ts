import {
    Component,
    HostBinding,
    OnDestroy,
    OnInit,
    Renderer2
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiLoginService} from '@services/api/api-login/api-login.service';
import {reqLogin} from '@services/api/api-login/interface/api-login';
import {AppService} from '@services/app.service';
import {LocalService} from '@services/local.service';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    @HostBinding('class') class = 'login-box';
    valCheck: string[] = ['remember'];
    subscription: Subscription;
    public loginForm: FormGroup;
    public isAuthLoading = false;
    public isGoogleLoading = false;
    public isFacebookLoading = false;
    public isusername = true;
    public textColor = '';
    public reqLogin: reqLogin = {
        // username: '',
        // password: ''
        username: 'admin',
        password: 'admin'
    };

    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        private appService: AppService,
        private apiLogin: ApiLoginService,
        private router: Router,
        private localService: LocalService
    ) {}

    ngOnInit() {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.localService.clearToken();
    }

    ngOnDestroy() {
        if (this.subscription && !this.subscription.closed) {
            this.subscription.unsubscribe();
        }
    }

    login() {
        this.isAuthLoading = true;
        const body = {
            username: this.reqLogin.username,
            password: this.reqLogin.password
        };

        console.log('body->', body);

        this.apiLogin.usersLogin(body).subscribe(
            async (res) => {
                if (res.resCode === '0000') {
                    this.localService.setToken(res.resData.accessToken);
                    this.localService.setRefreshToken(res.resData.refreshToken);
                    this.localService.setTokenExpire(res.resData.expire);

                    this.localService.setProfile(res.resData);

                    await Swal.fire({
                        icon: 'success',
                        title: 'เข้าสู่ระบบสำเร็จ',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    this.isAuthLoading = false;

                    await this.router.navigate(['/app/pages/dashboard']);
                } else {
                    console.log('no pass');
                }
            },
            (err) => {
                console.log('err->', err);
                Swal.fire({
                    icon: 'error',
                    title: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.isAuthLoading = false;
                this.reqLogin.password = '';
            }
        );
    }

    isBtnDisabled() {
        if (
            this.reqLogin.password !== '' &&
            this.reqLogin.password !== null &&
            this.reqLogin.username !== '' &&
            this.reqLogin.username !== null
        ) {
            return false;
        } else {
            return true;
        }
    }
}
