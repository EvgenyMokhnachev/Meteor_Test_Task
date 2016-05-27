Post = new Mongo.Collection('post', {
    //transform: function(doc){
    //    doc.author = User.findOne({_id: doc.authorId}).wait();
    //    console.log(doc);
    //    return doc;
    //}
});

Post.allow({
    insert: function(userId, doc) {
        return true;
    }
});