import {readdir} from 'node:fs/promises';
import config from "@bootstrap/config";
import {Router} from "express";
import RouteRegisteredEventEmitter from "@bootstrap/RouteRegisteredEventEmitter"

type Route = {
    path: string,
    router: Router
}

const getRouteByFileName = async (fileName: string): Promise<Route> => {
    const file = await import('@routes/' + fileName)

    return file.default
}

const initRoutes = async (routeRegistered: RouteRegisteredEventEmitter): Promise<void> => {
    const files = await readdir(config.path.routes);

    for (const file of files) {
        const route: Route = await getRouteByFileName(file);

        routeRegistered.register(route);
    }

    routeRegistered.routeInitEnd();
}

export default initRoutes;

export {Route}
