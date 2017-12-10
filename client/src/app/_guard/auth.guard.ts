import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    model: any = {};

    constructor(private router: Router,
        private AuthService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.model.token = localStorage.getItem('token');
        if (this.model.token) {
            return this.AuthService.authenticate(this.model).map(result => { 
                console.log("CanActivate for /" + route.routeConfig.path + ": "+ result);                
                return result;
            });
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
