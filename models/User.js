const {Schema , model} = require('mongoose');

const userSchema = new Schema ({
    Username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address']

    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        }

    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
 

}]
});


userSchema.virtual('friendCount').get(function(){
    return this.friends.length
});


const User = model ('User', userSchema);



module.exports = User;