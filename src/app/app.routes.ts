import { Routes } from '@angular/router';
import homeRoutes from './home/home.routes';

const home = 'Inovar Potiguar';
export const routes: Routes = [
    homeRoutes(home)
];
