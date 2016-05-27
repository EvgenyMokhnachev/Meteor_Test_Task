Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('signUpTemplate', {path: '/signup'});
    this.route('signInTemplate', {path: '/signin'});
    this.route('createPostTemplate', {path: '/createPost'});
    this.route('postPageTemplate', {
        path: '/post/:_id',
        data: function(){
            return Post.findOne(this.params._id);
        }
    });
    this.route('profileTemplate', {
        path: '/profile',
        data: function(){
            return Session.get('sessionUser');
        }
    });
});