User = new Mongo.Collection('user');

User.allow({
    insert: function(userId, doc) {
        return true;
    },
    update: function(){
        return true;
    }
});