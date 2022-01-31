import React, {FC} from 'react';
import {IPost} from "../types/types";
import Post from "./Post";

interface PostListProps{
    posts: IPost[]
}

const PostList: FC<PostListProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post=>
                <Post key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;