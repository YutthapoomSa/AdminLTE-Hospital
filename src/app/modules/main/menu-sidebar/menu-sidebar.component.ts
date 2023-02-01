import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {LocalService} from '@services/local.service';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss'],
    styles:['text {color:aqua;}']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = [];
    constructor(
        public appService: AppService,
        private store: Store<AppState>,
        public localService: LocalService
    ) {}

    async ngOnInit() {
        await this.initMenu();
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.appService.user;
    }
    checkRoleUser() {
        const userDetail = this.localService.getProfile();
        if (userDetail.role === 'user') {
            return false;
        } else {
            return true;
        }
    }
    checkRoleUserOrAdmin() {
        const userDetail = this.localService.getProfile();
        if (userDetail.role === 'user' || userDetail.role === 'admin') {
            return false;
        } else {
            return true;
        }
    }
    checkRoleManager() {
        const userDetail = this.localService.getProfile();
        if (userDetail.role === 'manager') {
            return false;
        } else {
            return true;
        }
    }
    async initMenu() {
        this.menu = [
            {
                name: 'ข่าวประชาสัมพันธ์',
                path: ['/dashboard'],
                icon: 'fas fa-newspaper',
                class: 'text',
                isShow: true
            },
            {
                name: 'รายงานข้อมูลและสถิติ',
                isShow: this.checkRoleUser(),
                icon: 'fas fa-chart-pie',
                children: [

                    {
                        name: 'ภาพรวมโรงพยาบาล',
                        path: ['/form-inputs'],
                        isShow: true,
                        icon: 'far fa-circle'
                    },
                    {
                        name: 'ภาพรวมบุคลากร',
                        path: ['/form-layouts'],
                        isShow: true,
                        icon: 'far fa-circle'
                    }
                ]
            },
            // {
            //     name: 'รับเข้าเอกสาร',
            //     path: ['/receive-documents'],
            //     isShow: this.checkRoleManager(),
            //     icon: 'fas fa-download'
            // },
            // {
            //     name: 'เอกสารรอจัดส่ง',
            //     path: ['/pending-documents'],
            //     isShow: this.checkRoleManager(),
            //     icon: 'fas fa-file-pen'
            // },
            // {
            //     name: 'ติดตามเอกสาร',
            //     path: ['/tracking'],
            //     isShow: false,
            //     icon: 'fas fa-tags'
            // },
            // {
            //     name: 'คลังเอกสาร',
            //     path: ['/archive-document'],
            //     isShow: true,
            //     icon: 'fas fa-cubes'
            // },
            // {
            //     name: 'จัดการหน่วยงาน',
            //     path: ['/manage-departments'],
            //     isShow: this.checkRoleUser(),
            //     icon: 'fa-solid fa-folder-tree'
            // },
            {
                name: 'รายการสั่งซื้อ',
                isShow: this.checkRoleUser(),
                icon: 'fas fa-solid fa-file-signature',
                children: [
                    {
                        name: 'ใบสั่งซื้อ',
                        path: ['/purchase-order'],
                        isShow: true,
                        icon: 'far fa-circle'
                    },
                    {
                        name: 'ใบขอซื้อ',
                        path: ['/purchase-requisition'],
                        isShow: true,
                        icon: 'far fa-circle'
                    }
                ]
            },
            {
              name: 'รายงานสภาพอากาศ',
              isShow: this.checkRoleUser(),
              path: ['/weather-station'],
              icon: 'fas fa-cloud-sun-rain',
              children: [
                {
                    name: 'Temp Monitoring',
                    path: ['/temperature'],
                    isShow: true,
                    icon: 'far fa-circle'
                },
                {
                    name: 'Air Quality Report', 
                    path: ['/air-quality'],
                    isShow: true,
                    icon: 'far fa-circle'
                },
                {
                    name: 'OPD Eye',
                    path: ['/opd-eye'],
                    isShow: true,
                    icon: 'far fa-circle'
                }
            ]
           },
            // {
            //     name: 'จัดการบัญชีผู้ใช้',
            //     path: ['/profile'],
            //     isShow: this.checkRoleUser(),
            //     icon: 'fas fa-user-circle'
            // },
            // {
            //     name: 'ออกจากระบบ',
            //     path: ['/logout'],
            //     isShow: true,
            //     icon: 'fas fa-sign-out-alt'
            // }
        ];
    }
}
