import mongoose from 'mongoose';

const recruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    avatar: {
        type: binary,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    addedJobs: {
        type: array,
        required: true
    }
}, {
    timestamps: true
});





const Recruiter = mongoose.model('Recruiter', recruiterSchema);
export default Recruiter;