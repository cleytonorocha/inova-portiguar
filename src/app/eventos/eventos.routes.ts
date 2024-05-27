import { Route } from "@angular/router"

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: 'eventos',
        title : tituloPadrao + ' - Eventos',
        loadComponent : () => import('./eventos.component')
    }
    return rote;
}