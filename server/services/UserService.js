Meteor.methods({

    registerUser: function(registerData){
        var email = registerData.email;
        var username = registerData.username;
        var password = registerData.password;

        var userByEmail = User.findOne({email: email});
        if(userByEmail) {
            return {
                success: false,
                data: 'Email already exists'
            }
        }

        var userByUsername = User.findOne({username: username});
        if(userByUsername) {
            return {
                success: false,
                data: 'Username already exists'
            }
        }

        var newUser = {
            email: email,
            username: username,
            password: password
        };
        newUser._id = User.insert(newUser);
        return {
            success: true,
            data: newUser
        };
    },

    authorization: function(authorizationData){
        var login = authorizationData.login;
        var password = authorizationData.password;

        var user = User.findOne({username: login});
        if(!user) {
            user = User.findOne({email: login});
        }

        if(!user) {
            return {
                success: false,
                data: 'User not found'
            }
        }

        if(user.password === password) {
            return {
                success: true,
                data: user
            }
        } else {
            return {
                success: false,
                data: 'Incorrect password'
            }
        }
    },

    editProfile: function(userData){
        if(userData.email.length == 0) {
            return {
                success: false,
                data: 'Email can not be empty'
            }
        }

        if(userData.username.length == 0) {
            return {
                success: false,
                data: 'Username can not be empty'
            }
        }

        if(userData.email != userData.sessionUser.email) {
            if(User.findOne({email: userData.email})){
                return {
                    success: false,
                    data: 'Email already exists'
                }
            }
        }

        if(userData.username != userData.sessionUser.username) {
            if(User.findOne({username: userData.username})) {
                return {
                    success: false,
                    data: 'Username already exists'
                }
            }
        }

        userData.sessionUser.username = userData.username;
        userData.sessionUser.email = userData.email;
        userData.sessionUser.lastName = userData.lastName ? userData.lastName : '';
        userData.sessionUser.firstName = userData.firstName ? userData.firstName : '';

        console.log(userData.sessionUser);

        User.update({_id: userData.sessionUser._id}, {$set: userData.sessionUser});

        return {
            success: true,
            data: userData.sessionUser
        }
    }

});