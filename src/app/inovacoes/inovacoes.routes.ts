import { Route } from "@angular/router"

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: 'inovacoes',
        title : tituloPadrao + ' - Inovações',
        loadComponent : () => import('./inovacoes.component')
    }
    return rote;
}