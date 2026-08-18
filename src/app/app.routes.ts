import { Routes } from '@angular/router';
import { Homecomp } from './homecomp/homecomp';
import { Aboutcomp } from './aboutcomp/aboutcomp';
import { Contactcomp } from './contactcomp/contactcomp';



export const routes: Routes = [
    {path: '', component:Homecomp},
    {path: 'about', component: Aboutcomp},
    {path: 'contact', component: Contactcomp},


    //Aways Last Wild Card route
    {path: '**', loadComponent: () => import('./pagenotfound/pagenotfound').then(m => m.Pagenotfound)}
];
