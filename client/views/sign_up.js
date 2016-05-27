Template.signUpTemplate.events({
    'submit form': function(event){
        event.preventDefault();

        var username = $('[name=username]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Meteor.call('registerUser', {
            email: email,
            username: username,
            password: password
        }, function(error, result){
            if(result && result.success) {
                Session.setPersistent('sessionUser', result.data);
                Router.go('home');
            }

            if(result && !result.success){
                $('#signUpError').text(result.data);
            }
        });
    }
});