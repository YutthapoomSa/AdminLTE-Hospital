import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReqCreateSubmenu, ResCreateSubmenu} from './interface/submenu-create';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';
import {ReqUpdateSubmenu} from './interface/submunu-update';
import {ResUpdateMenu} from '../api-menu/interface/menu-update';
import {ResFindOneSubmenu} from './interface/submenu-findOne';

@Injectable({
    providedIn: 'root'
})
export class ApiSubMenuService {
    constructor(private http: HttpClient) {}

    submenuCreate(body: ReqCreateSubmenu): Observable<ResCreateSubmenu> {
        return this.http.post<ResCreateSubmenu>(
            `${environment.Url}/sub-menu/CreateSubMenu`,
            body
        );
    }

    submenuUpdate(
        body: ReqUpdateSubmenu,
        submenuId: number
    ): Observable<ResUpdateMenu> {
        return this.http.patch<ResUpdateMenu>(
            `${environment.Url}/sub-menu/UpdateSubMenu${submenuId}`,
            body
        );
    }

    submenuFindOne(submenuId: number): Observable<ResFindOneSubmenu> {
        return this.http.get<ResFindOneSubmenu>(
            `${environment.Url}/sub-menu/FindOneSubMenu${submenuId}`
        );
    }

    submenuFindAll(): Observable<ResFindOneSubmenu[]> {
        return this.http.get<ResFindOneSubmenu[]>(
            `${environment.Url}/sub-menu/FindAllSubMenus`
        );
    }
}
