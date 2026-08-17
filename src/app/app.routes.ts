import { Routes } from '@angular/router';
import { HomeComp } from './home-comp/home-comp';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComp },
    { path: 'about', component: About },
    { path: 'contact', component: Contact }

];
