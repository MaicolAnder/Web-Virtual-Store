import { Routes } from '@angular/router';
import { LandingComponent } from './pages/web-store/landing/landing.component';
import { ProductListComponent } from './pages/web-store/product-list/product-list.component';
import { ProductDetailComponent } from './pages/web-store/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing-page',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'store',
        component: ProductListComponent
    },
    {
        path: 'detail/:id',
        component: ProductDetailComponent 
    }
];
