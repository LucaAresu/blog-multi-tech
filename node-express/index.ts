import express from 'express';
import initRoutes, {Route} from "./bootstrap/router";
import RouteRegisteredEventEmitter from "./bootstrap/RouteRegisteredEventEmitter";
import dotenv from 'dotenv'
import connect from "./bootstrap/database";
import ErrorHandler from "./bootstrap/errorHandler";

dotenv.config();

connect();

const app = express();

app.use(express.json())

const onRouteRegistered = (route: Route) => {
    app.use(route.path, route.router)
};

const routeRegistered = new RouteRegisteredEventEmitter(onRouteRegistered);

initRoutes(routeRegistered);

routeRegistered.on(routeRegistered.allRoutesRegisteredEventName, () => {
    app.use(ErrorHandler);
})


app.listen(3000, () => {
})
