import {NextFunction, request, Request, response, Response} from "express";
import Post from "@app/post/post";

const create = async (request: Request, response: Response) => {
    const post = await Post.create({
        author: request.body.author,
        content: request.body.content
    })

    return response.json(post);
}


const list = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const posts = await Post.find({}).limit(2);
        response.json(posts)
    } catch (e) {
        next(e);
    }
}

export default {
    create,
    list
}
