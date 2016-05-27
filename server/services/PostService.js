Meteor.methods({

    createPost: function(postData){
        var postText = postData.text;
        if(postText.length == 0) {
            return {
                success: false,
                data: 'You can\'t create an empty post'
            }
        }

        var sessionUser = postData.author;
        if(!sessionUser) {
            return {
                success: false,
                data: 'An unauthorized user can\'t create post'
            }
        }

        console.log('SessionUserId: ', sessionUser._id);
        var privatePost = postData.private;
        var post = {
            author: sessionUser,
            text: postText,
            createdAt: new Date(),
            private: privatePost
        };

        post._id = Post.insert(post);

        return {
            success: true,
            data: post
        }
    },

    changePostVote: function(author, post){
        var postVoteUser = PostVote.findOne({
            authorId: author._id,
            postId: post._id
        });

        if(postVoteUser) {
            PostVote.remove(postVoteUser._id);
        } else {
            var postVote = {
                authorId: author._id,
                postId: post._id
            };

            postVote._id = PostVote.insert(postVote);
        }

        var allVotesInPost = PostVote.find({postId: post._id});

        return {
            success: true,
            data: allVotesInPost.length
        }
    }

});