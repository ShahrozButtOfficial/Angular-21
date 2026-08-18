import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dahboard } from './dahboard/dahboard';
import { authGuard } from './auth-guard';
import { canDeactivateGuard } from './can-deactivate-guard';
import { Profile } from './profile/profile';



export const routes: Routes = [
    {path: 'login', component: Login},
    {
        path: 'dashboard',
        component: Dahboard,
        canActivate: [authGuard]
    },

    {
        path: 'profile',
        component: Profile,
        canDeactivate: [canDeactivateGuard]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
     
];
