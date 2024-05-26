import { Route } from "@angular/router"

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: 'inova-potiguar',
        title : tituloPadrao + ' - História',
        loadComponent : () => import('./inovar-potiguar.component')
    }
    return rote;
}