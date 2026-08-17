import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Settings } from './dashboard/settings/settings';

export const routes: Routes = [
    {
        path: 'dashboard', 
        component: Dashboard,
        children:[
            {path: 'profile', component: Profile},
            {path: 'settings', component: Settings}
        ]
    },
    {path: '', redirectTo: 'dashboard', pathMatch:'full'}
    
];
