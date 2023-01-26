import {Injectable} from '@angular/core';
import {reqLogin, resLogin} from './interface/api-login';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiLoginService {
    constructor(private http: HttpClient) {}
    usersLogin(body: reqLogin): Observable<resLogin> {
        return this.http.post<resLogin>(`${environment.Url}/users/login`, body);
    }
}
