import { Routes } from '@angular/router';
import homeRoutes from './home/home.routes';
import inovarRoutes from './inovar-potiguar/inova-potiguar.routes';
import eventosRoutes from './eventos/eventos.routes';
import inovacoesRoutes from './inovacoes/inovacoes.routes';

const home = 'Inova Potiguar';
export const routes: Routes = [
    homeRoutes(home),
    inovarRoutes(home),
    eventosRoutes(home),
    inovacoesRoutes(home)
];
