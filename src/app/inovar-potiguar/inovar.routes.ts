import { Route } from "@angular/router"

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: 'inovar-portiguar',
        title : tituloPadrao + ' - História',
        loadComponent : () => import('./inovar-potiguar.component')
    }
    return rote;
}