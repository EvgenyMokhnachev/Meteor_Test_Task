Meteor.publish('comment', function(){
    return Comment.find();
});