Meteor.publish('postVote', function(){
    return PostVote.find();
});
