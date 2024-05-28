import { Route } from "@angular/router"

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: 'instituicoes',
        title : tituloPadrao + ' - Instituições',
        loadComponent : () => import('./instituicoes.component')
    }
    return rote;
}