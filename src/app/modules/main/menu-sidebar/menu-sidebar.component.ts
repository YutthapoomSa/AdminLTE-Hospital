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
                name: 'หน้าหลัก',
                path: ['/dashboard'],
                // icon: 'fas fa-tachometer-alt',
                isShow: true
            },
            // {
            //     name: 'ค้นหาหนังสือ',
            //     path: ['/tracking-document-routing'],
            //     icon: 'fa-solid  fa-magnifying-glass',
            //     isShow: true
            // },
            // {
            //     name: 'ทะเบียน รับ-ส่ง หนังสือ',
            //     path: ['/regis-receiving-sending-doc'],
            //     icon: 'fa-solid fa-folder',
            //     isShow: true
            // },
            // {
            //     name: 'Blank',
            //     path: ['/blank']
            // },
            // {
            //     name: 'สร้างเอกสาร',
            //     path: ['/manage-documents'],
            //     icon: 'fa-solid fa-file-signature'
            // },
            {
                name: 'Dashboard โรงพยาบาล',
                isShow: true,
                icon: 'fas fa-tachometer-alt',
                children: [
                    {
                        name: 'ภาพรวมบุคคลากร',
                        path: ['/personnel-overview'],
                        isShow: true,
                    },
                    {
                        name: 'ภาพรวมโรงพยาบาล',
                        path: ['/blank'],
                        isShow: true,
                    }
                ]
            },
            {
                name: 'จัดการบัญชีผู้ใช้',
                path: ['/profile'],
                isShow: this.checkRoleUser(),
                icon: 'fa-solid fa-user-group'
            },
            {
                name: 'ออกจากระบบ',
                path: ['/logout'],
                isShow: true,
                icon: 'fa-solid fa-right-from-bracket'
            }
        ];
    }
}
