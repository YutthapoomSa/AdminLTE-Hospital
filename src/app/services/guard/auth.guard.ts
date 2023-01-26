import {LocalService} from './../local.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private localService: LocalService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // console.log('AuthGuard -> token -> ', this.localService.getToken());

        if (this.localService.getToken()) {
            // console.log('AuthGuard -> true');
            return true;
        } else {
            console.log('AuthGuard -> false');

            this.router.navigate(['/login']);
        }
    }
}
