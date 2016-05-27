Meteor.publish('post', function(){
    return Post.find();
});

//Meteor.publish('post', function(){
//    var posts = Post.find().fetch();
//
//    var authorIds = posts.map(function(post){
//        return post.authorId;
//    });
//    var authors = User.find({_id: {$in: authorIds}}).fetch();
//
//    posts.map(function(postItem){
//        authors.forEach(function(authorItem, authorIndex){
//            if(postItem.authorId == authorItem._id){
//                console.log('post:', postItem);
//                console.log('author:', authors[authorIndex]);
//                postItem.author = authors[authorIndex];
//            }
//        });
//    });
//
//    console.log(posts);
//
//    return posts;
//});