PostVote = new Meteor.Collection('postVote');

PostVote.allow({
    insert: function() {
        return true;
    },
    update: function(){
        return true;
    }
});