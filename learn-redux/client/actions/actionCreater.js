// increment
function increment(index) {
    return {
        type: "INCREMENT_LIKES",
        index
    }
}

// add comment
function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId,
        author
    }
}

// remove coment
function remoevComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}
