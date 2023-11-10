import {Router} from "express";
import {Route} from "@bootstrap/router";
import PostController from "@app/post/postController";

const postRouter = Router();

postRouter.get('/', PostController.list)

postRouter.get('/prova', (req, res) => {
    res.send('prova')
})

postRouter.post('/', PostController.create)

const route : Route = {
    router: postRouter,
    path: '/post'
};

export default route;
