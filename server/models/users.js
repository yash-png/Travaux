import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        validate: {
            validator: function(v) {
                return v.toString().length === 10;
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: true
    },
    resume: {
        type: binary,
        required: true
    },
    jobApplied: {
        type: Array,
        default: []
    },
    jobOffers: {
        type: Array,
        default: []
    },
});

const User = mongoose.model('User', userSchema);
export default User;