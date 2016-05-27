Template.createPostTemplate.events({
    'submit form': function(event){
        event.preventDefault();

        var postData = $('[name=postTextarea]').val();
        var privatePost = $('[name=privatePost]').val();

        Meteor.call('createPost', {
            text: postData,
            private: privatePost,
            author: Session.get('sessionUser')
        }, function(error, result){
            if(result && !result.success){
                $('#createPostErrors').text(result.data);
                return;
            }

            if(result && result.success) {
                Router.go('home');
            }
        });
    }
});