import React from 'react';
import Photo from './Photo';
import Comment from './Comment';
class Single extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';
    }
    render() {
        const postId = this.props.params.postId
        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        console.log(i, post)
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comment postComments={postComments}/>
            </div>
        );
    }
}

export default Single;
