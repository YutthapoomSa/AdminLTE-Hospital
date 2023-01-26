import {Injectable} from '@angular/core';
import { ResLoginData } from './api/api-login/interface/api-login';

@Injectable({
    providedIn: 'root'
})
export class LocalService {
    constructor() {}

    setProfile(userLocal: ResLoginData) {
        localStorage.setItem('profile', JSON.stringify(userLocal));
    }

    getProfile(): ResLoginData {
        const result = localStorage.getItem('profile');

        if (!result) {
            return null;
        }

        const _res: ResLoginData = JSON.parse(result);
        return _res;
    }

    clearProfile() {
        localStorage.removeItem('profile');
    }

    // ─────────────────────────────────────────────────────────────────

    setToken(accessToken: string) {
        localStorage.setItem('accessToken', accessToken);
    }

    getToken() {
        return localStorage.getItem('accessToken');
    }

    setRefreshToken(refreshToken: string) {
        localStorage.setItem('refreshToken', refreshToken);
    }

    getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    setTokenExpire(tokenExpire: string) {
        if (!tokenExpire) {
            return null;
        }
        localStorage.setItem(EnumLocalStorageKey.tokenExpire, tokenExpire);
        return this.getToken();
    }

    getTokenExpire() {
        return localStorage.getItem(EnumLocalStorageKey.tokenExpire);
    }

    clearToken() {
        localStorage.clear();
    }

    clearTokenExpire() {
        localStorage.removeItem(EnumLocalStorageKey.tokenExpire);
    }
}

export enum EnumLocalStorageKey {
    userInfo = 'userInfo',
    accessToken = 'accessToken',
    tokenExpire = 'tokenExpire'
    // accessAssignConfig = 'accessAssignConfig'
}

