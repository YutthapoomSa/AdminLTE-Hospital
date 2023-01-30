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
    styleUrls: ['./menu-sidebar.component.scss']
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
                isShow: true
            },

            {
                name: 'Dashboard',
                isShow: this.checkRoleUser(),
                icon: 'fas fa-solid fa-file-signature',
                children: [
                    {
                        name: 'บุคลากร',
                        path: ['/form-layouts'],
                        isShow: true,
                        icon: 'fas fa-users'
                    },
                    {
                        name: 'โรงพยาบาล',
                        path: ['/form-inputs'],
                        isShow: true,
                        icon: 'fas fa-hospitals'
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
                name: 'จัดการบัญชีผู้ใช้',
                path: ['/profile'],
                isShow: this.checkRoleUser(),
                icon: 'fas fa-user-gear'
            },
            {
                name: 'ออกจากระบบ',
                path: ['/logout'],
                isShow: true,
                icon: 'fas fa-right-from-bracket'
            }
        ];
    }
}
