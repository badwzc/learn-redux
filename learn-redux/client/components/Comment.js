'use strict';

import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comment';

    }

    renderComment(comment, i) {
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit = (e) => {
        console.log(e)
        const { postId } = this.props.params;
        e.prevetDefault()
    }

    render() {
        const handleSubmit = this.handleSubmit.bind(this);
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form onSubmit={handleSubmit} ref="commentForm" className="comment-form">
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
}

export default Comment;
