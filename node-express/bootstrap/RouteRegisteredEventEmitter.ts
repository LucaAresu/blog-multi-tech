import {EventEmitter} from 'node:events'
import {Route} from "./router";

export default class RouteRegisteredEventEmitter extends EventEmitter {

    eventName = 'RouteCreated';
    allRoutesRegisteredEventName = 'AllRoutesRegistered';
    constructor(onRouteRegistered: (route: Route) => void) {
        super();

        this.on(this.eventName, onRouteRegistered)
    }

    register(route: Route) {
        this.emit(this.eventName, route);
    }

    routeInitEnd() {
        this.emit(this.allRoutesRegisteredEventName)
    }
}
