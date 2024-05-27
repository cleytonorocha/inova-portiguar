import { Routes } from '@angular/router';
import homeRoutes from './home/home.routes';
import inovarRoutes from './inovar-potiguar/inovar.routes';
import eventosRoutes from './eventos/eventos.routes';

const home = 'Inovar Potiguar';
export const routes: Routes = [
    homeRoutes(home),
    inovarRoutes(home),
    eventosRoutes(home)
];
