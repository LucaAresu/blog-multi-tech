import mongoose, {Model, Schema} from "mongoose";

export const MIN_LENGTH_CONTENT = 10,
    MAX_LENGTH_CONTENT = 6000,
    MIN_LENGTH_AUTHOR = 3,
    MAX_LENGTH_AUTHOR = 20,
    COLLECTION_NAME = 'post';

type PostType = {
    content: string,
    author: string
}

const schema: Schema<PostType> = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: MIN_LENGTH_CONTENT,
        maxLength: MAX_LENGTH_CONTENT
    },
    author: {
        type: String,
        required: true,
        minLength: MIN_LENGTH_AUTHOR,
        maxLength: MAX_LENGTH_AUTHOR
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})

const Post: Model<PostType> = mongoose.model('post', schema)

export default Post
