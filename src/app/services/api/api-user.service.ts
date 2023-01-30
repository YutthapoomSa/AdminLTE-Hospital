import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs';
import { ResUserById } from './api-user/interface/users-by-id';
import { ResUserDelete } from './api-user/interface/users-delete';
import { ReqRefreshToken, ResRefreshToken } from './api-user/interface/users-refresh-token';
import { ReqUsersRegister, ResUsersRegister } from './api-user/interface/users-register';
import { ReqUserUpdate, ResUserUpdate } from './api-user/interface/users-update';


@Injectable({
    providedIn: 'root'
})
export class ApiUserService {
    constructor(private http: HttpClient) {}

    deleteUser(id: number): Observable<ResUserDelete> {
        return this.http.delete<ResUserDelete>(`${environment.Url}/users/delete/${id}`);
    }

    getUserById(id: number): Observable<ResUserById> {
        return this.http.get<ResUserById>(`${environment.Url}/users/${id}`);
    }

    userRefreshToken(body: ReqRefreshToken): Observable<ResRefreshToken> {
        return this.http.post<ResRefreshToken>(`${environment.Url}/users/refreshToken`, body);
    }

    usersRegister(body: ReqUsersRegister): Observable<ResUsersRegister> {
        return this.http.post<ResUsersRegister>(`${environment.Url}/users/register`, body);
    }

    userUpdate(body: ReqUserUpdate, id: number): Observable<ResUserUpdate> {
        return this.http.patch<ResUserUpdate>(`${environment.Url}/users/update/${id}`, body);
    }
}
