import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dahboard } from './dahboard/dahboard';
import { authGuard } from './auth-guard';



export const routes: Routes = [
    {path: 'login', component: Login},
    {
        path: 'dashboard',
        component: Dahboard,
        canActivate: [authGuard]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
     
];
