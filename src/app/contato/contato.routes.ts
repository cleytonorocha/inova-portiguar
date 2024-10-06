import { Route } from "@angular/router"

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: 'contato',
        title : tituloPadrao + ' - Contato',
        loadComponent : () => import('./contato.component')
    }
    return rote;
}