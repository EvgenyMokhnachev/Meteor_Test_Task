Meteor.methods({

    createComment: function(commentData){
        var text = commentData.text;
        var author = commentData.author;
        var post = commentData.post;

        if(text.length == 0){
            return {
                success: false,
                data: 'Comment text can not be empty'
            }
        }

        if(!author) {
            return {
                success: false,
                data: 'Unauthorized users can not post comments'
            }
        }

        var comment = {
            createdAt: new Date(),
            author: author,
            postId: post._id,
            text: text
        };

        comment._id = Comment.insert(comment);

        return {
            success: true,
            data: comment
        }
    }

});