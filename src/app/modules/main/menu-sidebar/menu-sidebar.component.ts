import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { ApiMenuService } from '@services/api/api-menu/api-menu.service';
import { ResFindAllMenu } from '@services/api/api-menu/interface/menu-findAll';
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
    public menu: ResFindAllMenu[] ;
    constructor(
        public appService: AppService,
        private store: Store<AppState>,
        public localService: LocalService,
        private apiMenuService: ApiMenuService
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
        // ถ้ามีการเข้าสู่ระบบให้เรียกข้อมูลเมนูจาก API
        if (this.localService.getToken()) {
            this.menu = await this.apiMenuService.menuFindAll().toPromise();
        } else {
            this.menu = [
                {
                    "id": 1,
                    "menuName": "ข่าวประชาสัมพันธ์",
                    "icon": "fas fa-newspaper",
                    "iframeMenu": "dashboard",
                    "subMenuLists": []
                },
                {
                    "id": 2,
                    "menuName": "ลงชื่อเข้าใช้",
                    "icon": "fas fa-sign-in-alt",
                    "iframeMenu": "login",
                    "subMenuLists": []
                }
            ];
        }
    }
}
