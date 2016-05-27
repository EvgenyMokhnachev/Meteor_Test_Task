Template.profileTemplate.events({
    'submit form[name=userData]': function(event){
        event.preventDefault();

        var username = $('[name=username]');
        var email = $('[name=email]');
        var lastName = $('[name=lastName]');
        var firstName = $('[name=firstName]');

        var errorSaveProfile = $('#errorSaveProfile');

        Meteor.call('editProfile', {
            username: username.val(),
            email: email.val(),
            lastName: lastName.val(),
            firstName: firstName.val(),
            sessionUser: Session.get('sessionUser')
        }, function(error, result){
            if(!error && result.success) {
                Session.setPersistent('sessionUser', result.data);
                errorSaveProfile.hide();
            } else {
                errorSaveProfile.show().text(result.data);
            }
            console.log(result);
        });
    },

    'change input[name=email]': function(){
        var email = $('[name=email]');
        var userAvatarImg = $('img[id=userAvatarImg]');
        var emailMD5hash = MD5(email.val()+'');
        var avatarLink = 'https://www.gravatar.com/avatar/'+emailMD5hash;
        userAvatarImg.attr('src', avatarLink);
        return avatarLink;
    }
});

Template.profileTemplate.helpers({

    getGravatar: function(){
        var email = $('[name=email]');
        //var userAvatarImg = $('img[id=userAvatarImg]');
        var emailMD5hash = MD5(email.val()+'');
        var avatarLink = 'https://www.gravatar.com/avatar/'+emailMD5hash;
        //userAvatarImg.attr('src', avatarLink);
        return avatarLink;
    }

});