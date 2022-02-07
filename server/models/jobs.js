import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: Array,
        default: []
            // required: true
    },
    salary: {
        type: Object,
        default: {
            lowerBound: Number,
            upperBound: Number,
            period: String
        }

    },
    experience: {
        type: String,
    },
    queries: {
        type: Array
    }



});

const Jobs = mongoose.model('Job', jobSchema);
export default Jobs;