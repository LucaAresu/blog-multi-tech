import {describe, expect, it} from "vitest";
import Post, {MAX_LENGTH_AUTHOR, MAX_LENGTH_CONTENT, MIN_LENGTH_AUTHOR, MIN_LENGTH_CONTENT} from "./post";


const createPost = (content: string, author: string): InstanceType<typeof Post> => {
    return new Post({
        content,
        author
    });
}

describe('Content',  () => {
    it('should not validate if empty content', () => {
        const post = createPost('','fsamiofasms');

        expect(post.validate()).rejects.toThrow(/required/i);
    })

    it('should not validate if content is longer than max content characters', () => {
        const longString = 'a'.repeat(MAX_LENGTH_CONTENT + 1)

        const post = createPost(longString, 'fsafsa');

        expect(post.validate()).rejects.toThrow(/longer than/i);
    })

    it('should not validate if content is less than min content characters', () => {
        const shortString = 'a'.repeat(MIN_LENGTH_CONTENT - 1);

        const post = createPost(shortString, 'fasfsa');

        expect(post.validate()).rejects.toThrow(/shorter/i,);
    })

    it('should create if everything\'s good ', () => {
        const content = 'content aaaaaaa';

        const post = createPost(content,'asfasf');

        expect(post.content).toBe(content)
    })
});


describe('Author', () => {
    const content = 'content asasfmsiofasmoisaamofsamofs';

    it('should not validate if empty author', () => {
        const post = createPost(content,'');

        expect(post.validate()).rejects.toThrow(/required/i);
    })

    it('should not validate if content is longer than max author characters', () => {
        const longString = 'a'.repeat(MAX_LENGTH_AUTHOR + 1)

        const post = createPost(content, longString);

        expect(post.validate()).rejects.toThrow(/longer than/i);
    })

    it('should not validate if content is less than min content characters', () => {
        const shortString = 'a'.repeat(MIN_LENGTH_AUTHOR - 1);

        const post = createPost(content, shortString);

        expect(post.validate()).rejects.toThrow(/shorter/i,);
    })

    it('should create if everything\'s good ', () => {
        const author = 'billy';

        const post = createPost(content,author);

        expect(post.author).toBe(author)
    })
})
