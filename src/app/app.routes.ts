import { Routes } from '@angular/router';
import { Productcomp } from './productcomp/productcomp'
import { Products } from './products/products';



export const routes: Routes = [
   {path: 'product/:id', component: Productcomp},
   {path: 'products', component: Products},

     
];
