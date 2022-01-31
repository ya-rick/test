import React, {FC} from 'react';
import {IPost} from "../types/types";

interface PostProps{
    post: IPost;
}

const Post: FC<PostProps> = ({post}) => {
    return (
        <div className='post'>
            <h3 className='post__title'>{post.title}</h3>
            <p className='post__body'>{post.body}</p>
        </div>
    );
};

export default Post;