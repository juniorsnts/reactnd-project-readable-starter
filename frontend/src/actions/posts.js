export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receivePost(posts){
    return {
        type: RECEIVE_POSTS,
        posts
    }
}