Template.postPageTemplate.helpers({

    comments: function(){
        var post = this;
        return Comment.find({postId: post._id});
    }

});

Template.postPageTemplate.events({

    'submit form[name=sendComment]': function(event){
        event.preventDefault();

        var commentInput = $('[name="newCommentInput"]');
        var postId = commentInput.attr('data-postId');

        var sessionUser = Session.get('sessionUser');

        Meteor.call('createComment', {
            text: commentInput.val(),
            author: sessionUser,
            post: this
        }, function(error, result){
            console.log(result);
        });

        commentInput.val('');
    }

});