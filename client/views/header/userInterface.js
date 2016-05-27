Template.userInterfaceTemplate.helpers({

    getUsername: function(){
        var sessionUser = Session.get('sessionUser');
        return sessionUser.username;
    }

});

Template.userInterfaceTemplate.events({

    'click #sessionUserLogOutBtn': function(event){
        Session.set('sessionUser', null);
    }

});