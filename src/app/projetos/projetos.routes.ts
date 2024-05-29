import { Route } from "@angular/router"

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: 'projetos',
        title : tituloPadrao + ' - Projetos',
        loadComponent : () => import('./projetos.component')
    }
    return rote;
}