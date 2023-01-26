import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {Observable} from 'rxjs';
import {ResUserDelete} from './api-user/interface/users-delete';
import {
    ReqRefreshToken,
    ResRefreshToken
} from './api-user/interface/users-refresh-token';
import { ReqUsersRegister, ResUsersRegister } from './api-user/interface/users-register';

@Injectable({
    providedIn: 'root'
})
export class ApiUserService {
    constructor(private http: HttpClient) {}

    userRefreshToken(body: ReqRefreshToken): Observable<ResRefreshToken> {
        return this.http.post<ResRefreshToken>(
            `${environment.Url}/users/refreshToken`,
            body
        );
    }

    deleteUser(id: string): Observable<ResUserDelete> {
        return this.http.delete<ResUserDelete>(
            `${environment.Url}/users/delete/${id}`
        );
    }

    usersRegister(body: ReqUsersRegister): Observable<ResUsersRegister> {
        return this.http.post<ResUsersRegister>(
            `${environment.Url}/users/register`,
            body
        );
    }
}
