import {NextFunction, Request, response, Response} from "express";

export default (err: Error, req: Request, response: Response, next: NextFunction) => {
    response.status(500).send('Internal Error')
}
