Template.postTemplate.helpers({

    isVoted: function(){
        var post = this;
        var sessionUser = Session.get('sessionUser');

        var votePost = PostVote.find({authorId: sessionUser._id, postId: post._id}).fetch();
        return votePost.length > 0;
    },

    getVotes: function(){
        var votesPost = PostVote.find({
            postId: this._id
        }).fetch();

        return votesPost.length;
    }

});

Template.postTemplate.events({

    'click .changeVoteBn': function(event){
        var post = this;
        var sessionUser = Session.get('sessionUser');

        Meteor.call('changePostVote', sessionUser, post, function(error, result){
            if(!error && result.success) {

            }
        });

        event.preventDefault();
        return false;
    }

});