import { Routes } from '@angular/router';
import { Homecomp } from './homecomp/homecomp';
import { Aboutcomp } from './aboutcomp/aboutcomp';
import { Contactcomp } from './contactcomp/contactcomp';



export const routes: Routes = [
    {path: '', component:Homecomp},
    {path: 'about', component: Aboutcomp},
    {path: 'contact', component: Contactcomp},
];
