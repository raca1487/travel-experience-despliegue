import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

@Injectable()
export class CanActivateViaLoggingAdministrador implements CanActivateChild {

    constructor(private router: Router) { }

    canActivateChild() {
        // si el usuario no está loggeado como administrador le dará un alert y le llevará a "/"
        if (!HomeComponent.admin) {
            this.router.navigate(['/']);
            // alert('Debes identificarte como administrador para continuar');

            return false;
        }

        return true;
    }
}
