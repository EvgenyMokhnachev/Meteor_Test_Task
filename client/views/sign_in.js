Template.signInTemplate.events({
    'submit form': function(event){
        event.preventDefault();

        var login = $('[name=usernameOrEmail]').val();
        var password = $('[name=password]').val();

        Meteor.call('authorization', {
            login: login,
            password: password
        }, function(error, result){
            if(result && result.success) {
                Session.setPersistent('sessionUser', result.data);
                Router.go('home');
            }

            if(result && !result.success){
                $('#signInError').text(result.data);
            }
        });
    }
});