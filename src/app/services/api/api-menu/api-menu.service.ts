import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReqCreateMenu, ResCreateMenu} from './interface/menu-create';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';
import {ReqUpdateMenu, ResUpdateMenu} from './interface/menu-update';
import {ResFindOneMenu} from './interface/menu-findOne';
import {ResFindAllMenu} from './interface/menu-findAll';

@Injectable({
    providedIn: 'root'
})
export class ApiMenuService {
    constructor(private http: HttpClient) {}

    menuCreate(body: ReqCreateMenu): Observable<ResCreateMenu> {
        return this.http.post<ResCreateMenu>(
            `${environment.Url}/menu/createMenu/`,
            body
        );
    }

    menuUpdate(body: ReqUpdateMenu, menuId: number): Observable<ResUpdateMenu> {
        return this.http.patch<ResUpdateMenu>(
            `${environment.Url}/menu/updateMenu/${menuId}`,
            body
        );
    }

    menuFindOne(menuId: number): Observable<ResFindOneMenu> {
        return this.http.get<ResFindOneMenu>(
            `${environment.Url}/menu/findOne/${menuId}`,
            {}
        );
    }

    menuFindAll(): Observable<ResFindAllMenu[]> {
        return this.http.get<ResFindAllMenu[]>(
            `${environment.Url}/menu/findAllMenu`
        );
    }

    menuDelete(id: number): Observable<any> {
        return this.http.delete<any>(
            `${environment.Url}/menu/DeleteMenuByMenuId/${id}`
        );
    }
}
